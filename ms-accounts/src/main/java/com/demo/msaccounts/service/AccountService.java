package com.demo.msaccounts.service;

import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.model.Transaction;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface AccountService {

    Flux<Account> findAllByCustomerId(Integer customerId);
    Mono<Account> findById(Integer id);

    Flux<Transaction> findTransactionsByAccountId(Integer accountId);

}
