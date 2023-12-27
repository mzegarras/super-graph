package com.example.msrisksgraphql.component;

import com.example.msrisksgraphql.codegen.DgsConstants;
import com.example.msrisksgraphql.codegen.types.Customer;
import com.example.msrisksgraphql.codegen.types.Evaluation;
import com.netflix.graphql.dgs.*;
import com.netflix.graphql.dgs.exceptions.DgsEntityNotFoundException;
import grpc.net.csonic.grpc.server.RiskServiceGrpc;
import net.csonic.grpc.server.EvaluationRequest;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import java.util.Map;

@DgsComponent
public class EvaluationDataResolver {

    private final WebClient webClient;

    @GrpcClient("local-grpc-server")
    private  RiskServiceGrpc.RiskServiceBlockingStub serviceStub;


    public EvaluationDataResolver(WebClient webClient) {
        this.webClient = webClient;
    }

    @DgsEntityFetcher(name = "Customer")
    public Customer customer(Map<String, Object> values) {
        return new Customer((String) values.get("id"), null);
    }

    //@DgsData(parentType = "Customer", field = "evaluation")
    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.Evaluation)
    public Evaluation getEvalutionByCustomer(@InputArgument(name = DgsConstants.QUERY.EVALUATION_INPUT_ARGUMENT.CustomerID) String customerId) {

        var request = EvaluationRequest.newBuilder()
                .setCustomerId(customerId)
                .build();
        var response = serviceStub.getEvaluation(request);

        if(response!=null){
            return Evaluation.newBuilder()
                    .id(response.getId())
                    .customerId(response.getCustomerId())
                    .sbs(response.getSbs())
                    .pcr(response.getPcr())
                    .moodys(response.getMoodys())
                    .build();
        }else{
            throw  new DgsEntityNotFoundException();
        }


    }
    @DgsData(parentType = "Customer", field = "evaluation")
    public Evaluation getEvalution(DgsDataFetchingEnvironment dfe) {




        Customer customer = dfe.getSource();



       /* var uri = UriComponentsBuilder.fromUriString("/evaluations/search")
                .queryParam("customerId", customer.getId())
                .build().toUri();

        return webClient
                .get()
                .uri(uri.toString())
                .retrieve()
                .bodyToMono(Evaluation.class)
                .block();*/

        var request = EvaluationRequest.newBuilder()
                .setCustomerId(customer.getId())
                .build();
        var response = serviceStub.getEvaluation(request);

        if(response!=null){
            return Evaluation.newBuilder()
                    .id(response.getId())
                    .customerId(response.getCustomerId())
                    .sbs(response.getSbs())
                    .pcr(response.getPcr())
                    .moodys(response.getMoodys())
                    .build();
        }else{
            throw  new DgsEntityNotFoundException();
        }
    }
}
