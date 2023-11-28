package com.demo.mscustomers.repository;

import com.demo.mscustomers.model.Phone;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface PhoneRepository  extends R2dbcRepository<Phone, Integer> {

    Flux<Phone> findByCustomerId(int customerId);

}

