package com.example.mscustomersgraphql.component;


import com.example.mscustomersgraphql.codegen.types.Customer;
import com.example.mscustomersgraphql.codegen.types.DocumentTypeInput;
import com.example.mscustomersgraphql.codegen.types.Phone;
import com.netflix.graphql.dgs.*;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@DgsComponent
public class CustomerDataResolver {

    private final WebClient webClient;

    public CustomerDataResolver(WebClient webClient) {
        this.webClient = webClient;
    }

    @DgsQuery
    public List<Customer> allCustomers() {
        return webClient
                .get()
                .uri("/customers")
                .exchangeToMono(response -> response.bodyToMono(new ParameterizedTypeReference<List<Customer>>() {
                }))
                .block();
    }

    @DgsQuery
    public Customer findCustomers(@InputArgument("input") DocumentTypeInput input,
                                  DataFetchingEnvironment dfe) {

        var uri = UriComponentsBuilder.fromUriString("/customers/search")
                .queryParam("documentType", input.getType())
                .queryParam("documentNumber", input.getNumber())
                .build().toUri();


        return webClient
                .get()
                .uri(uri.toString())
                .retrieve()
                .bodyToMono(Customer.class)
                .block();



    }

    @DgsData(parentType = "Customer", field = "phones")
    public List<Phone> actors(DgsDataFetchingEnvironment dfe) {

        Customer customer = dfe.getSource();

        return webClient
                .get()
                .uri("/customers/" + customer.getId() + "/phones")
                .exchangeToMono(response -> response.bodyToMono(new ParameterizedTypeReference<List<Phone>>() {
                }))

                .block();
    }

}
