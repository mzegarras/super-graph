package com.demo.msaccounts.service;

import com.demo.msaccounts.datasource.repository.AccountRepository;
import com.demo.msaccounts.datasource.repository.TransactionRepository;
import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.model.Transaction;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Service
public class AccountServiceImpl implements  AccountService {

    private  final AccountRepository accountRepository;
    private  final TransactionRepository transactionRepository;
    public AccountServiceImpl(AccountRepository accountRepository, TransactionRepository transactionRepository) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    @Override
    public Flux<Account> findAllByCustomerId(String customerId) {
        return this.accountRepository.findByCustomerId(UUID.fromString(customerId))
                .map(BeanMapper::mapToGraphql);
    }

    @Override
    public Mono<Account> findById(String id) {

       return this.accountRepository.findById(UUID.fromString(id))
                .map(BeanMapper::mapToGraphql);

    }

    @Override
    public Flux<Transaction> findTransactionsByAccountId(String accountId) {
        return this.transactionRepository.findByAccountId(UUID.fromString(accountId))
                .map(BeanMapper::mapToGraphql);
    }
}
