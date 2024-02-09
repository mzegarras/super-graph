package net.csonic.customers.graphql.dataloaders;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

import net.csonic.customers.graphql.DgsConstants;
import org.dataloader.BatchLoaderEnvironment;
import org.dataloader.MappedBatchLoaderWithContext;
import org.springframework.beans.factory.annotation.Autowired;
import com.netflix.graphql.dgs.DgsDataLoader;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.service.query.CustomerQueryService;

@DgsDataLoader(name = DgsConstants.PHONE.TYPE_NAME)
public class PhonesDataLoader implements MappedBatchLoaderWithContext<String, List<PhoneEntity>> {
    
    @Autowired
    private CustomerQueryService queryService;

    @Override
    public CompletionStage<Map<String,List<PhoneEntity>>> load(Set<String> keys, BatchLoaderEnvironment environment){
        var phones = queryService.findPhonesCustomer(new ArrayList<>(keys));
        return CompletableFuture.supplyAsync(() -> phones);
    }

}