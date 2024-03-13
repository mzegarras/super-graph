package net.csonic.customers.graphql.service.query;

import net.csonic.customers.graphql.datasource.dao.CustomerDao;
import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.datasource.entity.RelationEntity;
//import net.csonic.customers.graphql.datasource.repository.PhoneRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class CustomerQueryService {

    private final CustomerDao customerDao;

    public CustomerQueryService(CustomerDao customerDao) {
        this.customerDao = customerDao;
    }

    public List<CustomerEntity> findByKeyword( String firstName,String lastName) {

        return customerDao.findByKeyword(firstName,lastName);
    }

    public Optional<CustomerEntity> findByDocument(String documentType, String documentNumber) {
        return customerDao.findByDocumentTypeAndDocumentNumber(documentType,documentNumber);
    }

    public Optional<CustomerEntity> findById(String id) {
        return Optional.of(customerDao.findCustomerById(id));
    }



    public Map<String, List<PhoneEntity>> findPhonesCustomer(List<String> customerId){


    //customerDao.findPhoneAll()

        return customerDao.findPhoneAll(customerId)
                .stream()
                .collect( Collectors.groupingBy(PhoneEntity::getCustomerId));
    }

    public Map<String, List<RelationEntity>> findRelationsCustomer(List<String> customerId){

        return customerDao.findRelationsAllV2(customerId)
                .stream()
                .collect( Collectors.groupingBy(RelationEntity::getParentId));
    }
}
