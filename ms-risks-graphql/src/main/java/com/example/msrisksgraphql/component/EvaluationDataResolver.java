package com.example.msrisksgraphql.component;

import com.example.msrisksgraphql.codegen.types.Customer;
import com.example.msrisksgraphql.codegen.types.Evaluation;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment;
import com.netflix.graphql.dgs.DgsEntityFetcher;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Map;

@DgsComponent
public class EvaluationDataResolver {

    private final WebClient webClient;

    public EvaluationDataResolver(WebClient webClient) {
        this.webClient = webClient;
    }

    @DgsEntityFetcher(name = "Customer")
    public Customer customer(Map<String, Object> values) {
        return new Customer((String) values.get("id"), null);
    }

    @DgsData(parentType = "Customer", field = "evaluation")
    public Evaluation getEvalution(DgsDataFetchingEnvironment dfe) {


        Customer customer = dfe.getSource();


        var uri = UriComponentsBuilder.fromUriString("/evaluations/search")
                .queryParam("customerId", customer.getId())
                .build().toUri();

        return webClient
                .get()
                .uri(uri.toString())
                .retrieve()
                .bodyToMono(Evaluation.class)
                .block();
    }
}
