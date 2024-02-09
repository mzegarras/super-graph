package net.csonic.customers.graphql.datasource.repository;

import net.csonic.customers.graphql.datasource.entity.PhoneEntity;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.UUID;

@Repository
public interface PhoneRepository extends ListCrudRepository<PhoneEntity, String> {

    //List<PhoneEntity> findByCustomerId(UUID customerId);

    @Query(nativeQuery = true, value = "select * from customers_phones cp " + "where cp.customer_id IN :lstCustomerId")
    List<PhoneEntity> findPhoneAll(@Param("lstCustomerId") List<String> lstCustomerId);
}
