package com.demo.msaccounts.controller;


import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.model.Transaction;
import com.demo.msaccounts.service.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/accounts")
public class AccountController {
    private final AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Account> getAccountById(@PathVariable("id") String id) {

        return this.service.findById(id);
    }

    @GetMapping("/{id}/transactions")
    @ResponseStatus(HttpStatus.OK)
    public Flux<Transaction> getTransactionsById(@PathVariable("id") String id) {

        return this.service.findTransactionsByAccountId(id);
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public Flux<Account> findByDocument(@RequestParam(name = "customerId") String customerId) {
        return this.service.findAllByCustomerId(customerId);
    }
}
