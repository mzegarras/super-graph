package com.demo.msrisk.datasource.repository;

import com.demo.msrisk.datasource.entity.EvaluationEntity;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RiskRepository extends ListCrudRepository<EvaluationEntity, UUID> {

    Optional<EvaluationEntity> findByCustomerId(UUID customerId);
}
