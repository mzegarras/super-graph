package com.demo.msrisk.service;

import com.demo.msrisk.model.Evaluation;
import com.demo.msrisk.repository.RiskRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class RiskServiceImpl implements RiskService {
    private final RiskRepository riskRepository;

    public RiskServiceImpl(RiskRepository riskRepository) {
        this.riskRepository = riskRepository;
    }

    @Override
    public Mono<Evaluation> findAllByCustomerId(Integer customerId) {
        return riskRepository.findById(customerId);
    }
}
