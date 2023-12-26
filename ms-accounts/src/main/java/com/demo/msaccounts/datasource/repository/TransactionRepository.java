package com.demo.msaccounts.datasource.repository;

import com.demo.msaccounts.datasource.entity.TransactionEntity;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

import java.util.UUID;

@Repository
public interface TransactionRepository extends R2dbcRepository<TransactionEntity, UUID> {

    Flux<TransactionEntity> findByAccountId(UUID accountId);

}

