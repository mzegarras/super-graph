package com.demo.msrisk.service;

import com.demo.msrisk.model.Evaluation;
//import reactor.core.publisher.Mono;

public interface RiskService {

    Evaluation findByCustomerId(String customerId);

}
