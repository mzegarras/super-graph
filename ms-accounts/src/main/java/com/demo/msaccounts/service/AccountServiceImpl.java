package com.demo.msaccounts.service;

import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.repository.AccountRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class AccountServiceImpl implements  AccountService {

    private  final AccountRepository accountRepository;

    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public Flux<Account> findAllByCustomerId(Integer customerId) {
        return this.accountRepository.findByCustomerId(customerId);
    }

    @Override
    public Mono<Account> findById(Integer id) {
        return this.accountRepository.findById(id);
    }
}
