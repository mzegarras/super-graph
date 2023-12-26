package com.demo.msaccounts.service;

import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.model.Transaction;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface AccountService {

    Flux<Account> findAllByCustomerId(String customerId);

    Mono<Account> findById(String id);

    Flux<Transaction> findTransactionsByAccountId(String accountId);

}
