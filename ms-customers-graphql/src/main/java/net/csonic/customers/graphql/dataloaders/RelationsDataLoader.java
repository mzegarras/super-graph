package net.csonic.customers.graphql.dataloaders;

import com.netflix.graphql.dgs.DgsDataLoader;
import net.csonic.customers.graphql.DgsConstants;


import net.csonic.customers.graphql.GraphqlBeanMapper;
import net.csonic.customers.graphql.service.query.CustomerQueryService;
import net.csonic.customers.graphql.types.Customer;
import org.dataloader.BatchLoaderEnvironment;
import org.dataloader.MappedBatchLoaderWithContext;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

@DgsDataLoader(name = DgsConstants.CUSTOMER.Relations)
public class RelationsDataLoader implements MappedBatchLoaderWithContext<String, List<Customer>> {
    @Autowired
    private CustomerQueryService queryService;

    @Override
    public CompletionStage<Map<String, List<Customer>>> load(Set<String> keys, BatchLoaderEnvironment environment) {
        var relations = queryService.findRelationsCustomer (new ArrayList<>(keys));


        var relationsMap = relations.entrySet()
                        .stream()
                        .collect(Collectors.toMap(Map.Entry::getKey,
                                list -> list.getValue()
                                        .stream()
                                        .filter(e->e.getCustomer()!=null)
                                        .map(e->GraphqlBeanMapper.mapToGraphql(e.getCustomer()))
                                        .collect(Collectors.toList()))
                        );

        return CompletableFuture.supplyAsync(() -> relationsMap);
    }


}
