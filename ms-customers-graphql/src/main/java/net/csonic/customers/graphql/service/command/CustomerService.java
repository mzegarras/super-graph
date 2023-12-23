package net.csonic.customers.graphql.service.command;

import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.datasource.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;
    public List<CustomerEntity> customersList() {

        return repository.findAll();
    }

    public Optional<CustomerEntity> findByDocument(String documentType, String documentNumber) {
        return repository.findByDocumentTypeAndDocumentNumber(documentType,documentNumber);
    }

    public Optional<CustomerEntity> findById(UUID id) {
        return repository.findById(id);
    }
}
