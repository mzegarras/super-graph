package net.csonic.customers.graphql.component;


import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import com.netflix.graphql.dgs.exceptions.DgsEntityNotFoundException;
import net.csonic.customers.graphql.DgsConstants;
import net.csonic.customers.graphql.GraphqlBeanMapper;
import net.csonic.customers.graphql.service.command.CustomerService;
import net.csonic.customers.graphql.types.Customer;
import net.csonic.customers.graphql.types.CustomerFilter;
import org.springframework.beans.factory.annotation.Autowired;


@DgsComponent
public class CustomerDataResolver {

    @Autowired
    private CustomerService queryService;

    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.Customer)
    public Customer customer(@InputArgument(name = DgsConstants.QUERY.CUSTOMER_INPUT_ARGUMENT.Filter) CustomerFilter filter) {

        var customer = queryService.find(filter.getType().name(),filter.getNumber())
                .orElseThrow(DgsEntityNotFoundException::new);

        return GraphqlBeanMapper.mapToGraphql(customer);

        //return queryService.find(filter.getType().name(),filter.getNumber());
       /* return queryService.customersList().stream().map(GraphqlBeanMapper::mapToGraphql)
                .collect(Collectors.toList());*/
    }

}
