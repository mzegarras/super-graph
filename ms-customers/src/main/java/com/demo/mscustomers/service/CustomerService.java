package com.demo.mscustomers.service;

import com.demo.mscustomers.model.Customer;
import com.demo.mscustomers.model.Phone;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface CustomerService {

    Flux<Customer> findAll();
    Mono<Customer> findById(int id);

    Flux<Phone> findPhonesByCustomerId(int id);

    Mono<Customer> findByDocument(String documentType,String documentNumber);
}
