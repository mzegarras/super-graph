package net.csonic.customers.graphql.datasource.repository;


import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CustomerRepository extends ListCrudRepository<CustomerEntity, UUID> {

    Optional<CustomerEntity> findByDocumentTypeAndDocumentNumber(String documentType, String documentNumber);


}
