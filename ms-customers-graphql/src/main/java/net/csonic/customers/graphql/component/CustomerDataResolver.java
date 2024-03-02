package net.csonic.customers.graphql.component;


import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment;
import com.netflix.graphql.dgs.InputArgument;
import com.netflix.graphql.dgs.exceptions.DgsEntityNotFoundException;
import net.csonic.customers.graphql.DgsConstants;
import net.csonic.customers.graphql.GraphqlBeanMapper;
import net.csonic.customers.graphql.dataloaders.RelationsDataLoader;
import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.service.query.CustomerQueryService;
import net.csonic.customers.graphql.types.Customer;
import net.csonic.customers.graphql.types.CustomerFilter;
import net.csonic.customers.graphql.types.CustomerSearchFilter;
import net.csonic.customers.graphql.types.Phone;
import org.apache.commons.lang3.StringUtils;
import org.dataloader.DataLoader;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import org.dataloader.DataLoader;
import java.util.concurrent.CompletableFuture;
import net.csonic.customers.graphql.dataloaders.PhonesDataLoader;


@DgsComponent
public class CustomerDataResolver {

    @Autowired
    private CustomerQueryService queryService;

    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.CustomerSearch)
    public List<Customer> customerSearch(@InputArgument(name = DgsConstants.QUERY.CUSTOMERSEARCH_INPUT_ARGUMENT.Filter) CustomerSearchFilter filter) {

       return queryService.findByKeyword(filter.getFirstName(),filter.getLastName())
               .stream().map(GraphqlBeanMapper::mapToGraphql)
               .collect(Collectors.toList());

    }
    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.Customer)
    public Customer customer(@InputArgument(name = DgsConstants.QUERY.CUSTOMER_INPUT_ARGUMENT.Filter) CustomerFilter filter) {

        var isFindById = !StringUtils.isEmpty(filter.getId());
        CustomerEntity customerEntity = null;
        if(isFindById){
            var customerId = filter.getId();
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

    /*
    @DgsData(parentType = DgsConstants.CUSTOMER.TYPE_NAME, field = DgsConstants.CUSTOMER.Phones)
    public List<Phone> phones(DgsDataFetchingEnvironment dfe) {

        Customer account = dfe.getSource();

        var phones = queryService.findPhonesByCustomerId(account.getId());

        return phones.stream().map(GraphqlBeanMapper::mapToGraphql)
                .collect(Collectors.toList());
    }
    */

    // Resolver with dataloader
    @DgsData(parentType = DgsConstants.CUSTOMER.TYPE_NAME, field = DgsConstants.CUSTOMER.Phones)
    public CompletableFuture<List<Phone>> phones(DgsDataFetchingEnvironment dfe){
        DataLoader<String, List<Phone>> phonesDataloader = dfe.getDataLoader(PhonesDataLoader.class);
        Customer customer = dfe.getSource();
        return phonesDataloader.load(customer.getId());
    }

    @DgsData(parentType = DgsConstants.CUSTOMER.TYPE_NAME, field = DgsConstants.CUSTOMER.Relations)
    public CompletableFuture<List<Customer>> reference(DgsDataFetchingEnvironment dfe){
        DataLoader<String, List<Customer>> phonesDataloader = dfe.getDataLoader(RelationsDataLoader.class);
        Customer customer = dfe.getSource();
        return phonesDataloader.load(customer.getId());
    }
}