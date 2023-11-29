package com.demo.msrisk.controller;


import com.demo.msrisk.model.Evaluation;
import com.demo.msrisk.service.RiskService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/evaluations")
public class EvaluationController {

    private final RiskService riskService;

    public EvaluationController(RiskService riskService) {
        this.riskService = riskService;
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Evaluation> findByDocument(@RequestParam(name = "customerId") int customerId) {
        return this.riskService.findAllByCustomerId(customerId);
    }
}
