package com.demo.msrisk.repository;

import com.demo.msrisk.model.Evaluation;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface RiskRepository extends R2dbcRepository<Evaluation, Integer> {
    Flux<Evaluation> findByCustomerId(int customerId);
}
