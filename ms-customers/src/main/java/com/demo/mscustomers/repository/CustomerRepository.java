package com.demo.mscustomers.repository;

import com.demo.mscustomers.model.Customer;
import com.demo.mscustomers.model.Phone;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface  CustomerRepository extends R2dbcRepository<Customer, Integer> {
    Mono<Customer> findByDocumentTypeAndDocumentNumber(String documentType,String documentNumber);
}
