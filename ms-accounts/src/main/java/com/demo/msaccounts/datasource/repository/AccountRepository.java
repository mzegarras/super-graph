package com.demo.msaccounts.datasource.repository;

import com.demo.msaccounts.datasource.entity.AccountEntity;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

import java.util.UUID;

@Repository
public interface AccountRepository extends R2dbcRepository<AccountEntity, UUID> {
    Flux<AccountEntity> findByCustomerId(UUID customerId);
}
