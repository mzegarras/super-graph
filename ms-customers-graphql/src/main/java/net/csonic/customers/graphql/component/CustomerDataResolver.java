package net.csonic.customers.graphql.component;


import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import com.netflix.graphql.dgs.exceptions.DgsEntityNotFoundException;
import net.csonic.customers.graphql.DgsConstants;
import net.csonic.customers.graphql.GraphqlBeanMapper;
import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.service.command.CustomerService;
import net.csonic.customers.graphql.types.Customer;
import net.csonic.customers.graphql.types.CustomerFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;
import java.util.UUID;


@DgsComponent
public class CustomerDataResolver {

    @Autowired
    private CustomerService queryService;

    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.Customer)
    public Customer customer(@InputArgument(name = DgsConstants.QUERY.CUSTOMER_INPUT_ARGUMENT.Filter) CustomerFilter filter) {

        var isFindById = !StringUtils.isEmpty(filter.getId());
        CustomerEntity customerEntity = null;
        if(isFindById){
            var customerId = UUID.fromString(filter.getId());
            customerEntity = queryService.findById(customerId)
                    .orElseThrow(DgsEntityNotFoundException::new);
        }else{
            customerEntity = queryService.findByDocument(filter.getType().name(),filter.getNumber())
                    .orElseThrow(DgsEntityNotFoundException::new);
        }


        return GraphqlBeanMapper.mapToGraphql(customerEntity);

        //return queryService.find(filter.getType().name(),filter.getNumber());
       /* return queryService.customersList().stream().map(GraphqlBeanMapper::mapToGraphql)
                .collect(Collectors.toList());*/
    }

}
