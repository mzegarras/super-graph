package com.demo.msaccounts.repository;

import com.demo.msaccounts.model.Transaction;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface TransactionRepository extends R2dbcRepository<Transaction, Integer> {

    Flux<Transaction> findByAccountId(int accountId);

}
