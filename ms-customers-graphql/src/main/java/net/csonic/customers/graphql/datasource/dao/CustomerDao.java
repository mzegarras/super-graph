package net.csonic.customers.graphql.datasource.dao;

import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.datasource.entity.RelationEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface CustomerDao {

    List<CustomerEntity> findByKeyword(String firstName, String lastName);

    CustomerEntity findCustomerById(String id);

    Optional<CustomerEntity> findByDocumentTypeAndDocumentNumber(String documentType, String documentNumber);

    List<PhoneEntity> findPhoneAll(List<String> lstCustomerId);

    List<RelationEntity> findRelationsAll(List<String> lstCustomerId);

}
