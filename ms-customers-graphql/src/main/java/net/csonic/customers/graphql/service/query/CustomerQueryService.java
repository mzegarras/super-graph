package net.csonic.customers.graphql.service.query;

import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.datasource.repository.CustomerRepository;
import net.csonic.customers.graphql.datasource.repository.PhoneRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import java.util.Map;


@Service
public class CustomerQueryService {

    private final CustomerRepository customerRepository;
    private final PhoneRepository phoneRepository;

    public CustomerQueryService(CustomerRepository customerRepository, PhoneRepository phoneRepository) {
        this.customerRepository = customerRepository;
        this.phoneRepository = phoneRepository;
    }

    public List<CustomerEntity> findByKeyword( String firstName,String lastName) {

        return customerRepository.findByKeyword(firstName,lastName);
    }

    public Optional<CustomerEntity> findByDocument(String documentType, String documentNumber) {
        return customerRepository.findByDocumentTypeAndDocumentNumber(documentType,documentNumber);
    }

    public Optional<CustomerEntity> findById(UUID id) {
        return customerRepository.findById(id);
    }

    /*
    public List<PhoneEntity> findPhonesByCustomerId(String customerId){
        return phoneRepository.findByCustomerId(UUID.fromString(customerId));
    }
    */

    public Map<String, List<PhoneEntity>> findPhonesCustomer(List<String> customerId){
        return phoneRepository.findPhoneAll(customerId).stream().collect(Collectors.groupingBy(p -> p.getCustomer().getId()));
    }
}
