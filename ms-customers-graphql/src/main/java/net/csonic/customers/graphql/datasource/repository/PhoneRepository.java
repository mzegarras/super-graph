package net.csonic.customers.graphql.datasource.repository;

import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.UUID;

@Repository
public interface PhoneRepository extends ListCrudRepository<PhoneEntity, UUID> {

    List<PhoneEntity> findByCustomerId(UUID customerId);
}
