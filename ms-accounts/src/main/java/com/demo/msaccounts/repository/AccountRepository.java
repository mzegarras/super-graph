package com.demo.msaccounts.repository;

import com.demo.msaccounts.model.Account;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface AccountRepository extends R2dbcRepository<Account, Integer> {

    Flux<Account> findByCustomerId(int customerId);
}
