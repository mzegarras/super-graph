package net.csonic.customers.graphql.datasource.repository;


import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CustomerRepository extends ListCrudRepository<CustomerEntity, UUID> {

    Optional<CustomerEntity> findByDocumentTypeAndDocumentNumber(String documentType, String documentNumber);

    //
    @Query(nativeQuery = true, value = "select * from customers c " + "where (:first_name is null or  upper(first_name) like  '%' || upper(:first_name) || '%') " + "and (:last_name is null or upper(last_name) like  '%' || upper(:last_name) || '%')")
    List<CustomerEntity> findByKeyword(@Param("first_name") String firstName, @Param("last_name") String lastName);

}
