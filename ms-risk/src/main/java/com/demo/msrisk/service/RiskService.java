package com.demo.msrisk.service;

import com.demo.msrisk.model.Evaluation;
import reactor.core.publisher.Mono;

public interface RiskService {

    Mono<Evaluation> findAllByCustomerId(Integer customerId);

}
