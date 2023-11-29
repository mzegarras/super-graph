package com.demo.msaccounts.service;

import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.model.Transaction;
import com.demo.msaccounts.repository.AccountRepository;
import com.demo.msaccounts.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class AccountServiceImpl implements  AccountService {

    private  final AccountRepository accountRepository;
    private  final TransactionRepository transactionRepository;
    public AccountServiceImpl(AccountRepository accountRepository, TransactionRepository transactionRepository) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    @Override
    public Flux<Account> findAllByCustomerId(Integer customerId) {
        return this.accountRepository.findByCustomerId(customerId);
    }

    @Override
    public Mono<Account> findById(Integer id) {
        return this.accountRepository.findById(id);
    }

    @Override
    public Flux<Transaction> findTransactionsByAccountId(Integer accountId) {
        return this.transactionRepository.findByAccountId(accountId);
    }
}
