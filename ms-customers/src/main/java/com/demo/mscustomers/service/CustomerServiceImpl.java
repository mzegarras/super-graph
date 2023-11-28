package com.demo.mscustomers.service;


import com.demo.mscustomers.model.Customer;
import com.demo.mscustomers.model.Phone;
import com.demo.mscustomers.repository.CustomerRepository;
import com.demo.mscustomers.repository.PhoneRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final PhoneRepository phoneRepository;


    public CustomerServiceImpl(CustomerRepository repository,PhoneRepository phoneRepository){
        this.customerRepository = repository;
        this.phoneRepository=phoneRepository;
    }

    @Override
    public Flux<Customer> findAll() {
        return  customerRepository.findAll();
    }

    @Override
    public Mono<Customer> findById(int id) {
        return  customerRepository.findById(id);
    }

    @Override
    public Flux<Phone> findPhonesByCustomerId(int customerId) {
        return phoneRepository.findByCustomerId(customerId);
    }

    @Override
    public Mono<Customer> findByDocument(String documentType, String documentNumber) {
        return customerRepository.findByDocumentTypeAndDocumentNumber(documentType,documentNumber);
    }


}
