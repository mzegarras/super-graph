package net.csonic.customers.graphql.dataloaders;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import org.dataloader.BatchLoaderEnvironment;
import org.dataloader.MappedBatchLoaderWithContext;
import org.springframework.beans.factory.annotation.Autowired;
import com.netflix.graphql.dgs.DgsDataLoader;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.service.query.CustomerQueryService;

@DgsDataLoader(name = "phones")
public class PhonesDataLoader implements MappedBatchLoaderWithContext<UUID, List<PhoneEntity>> {
    
    @Autowired
    private CustomerQueryService queryService;

    @Override
    public CompletionStage<Map<UUID,List<PhoneEntity>>> load(Set<UUID> keys, BatchLoaderEnvironment environment){
        var phones = queryService.findPhonesCustomer(new ArrayList<>(keys));
        return CompletableFuture.supplyAsync(() -> phones);
    }

}