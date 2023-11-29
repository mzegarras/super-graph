package com.demo.msaccountsgraphql.component;

import com.demo.msaccountsgraphql.codegen.types.Account;
import com.demo.msaccountsgraphql.codegen.types.Customer;
import com.netflix.graphql.dgs.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Map;

@DgsComponent
@Slf4j
public class AccountDataResolver {

    private final WebClient webClient;

    public AccountDataResolver(WebClient webClient) {
        this.webClient = webClient;
    }

    @DgsQuery
    public Account findAccountById(@InputArgument Integer id) {

        return webClient
                .get()
                .uri("/accounts/" + id)
                .retrieve()
                .bodyToMono(Account.class)
                .block();

    }


    @DgsEntityFetcher(name = "Customer")
    public Customer customer(Map<String, Object> values) {
        return new Customer((String) values.get("id"), null);
    }

    @DgsData(parentType = "Customer", field = "accounts")
    public List<Account> actors(DgsDataFetchingEnvironment dfe) {

        log.info("customer - before");
        Customer customer = dfe.getSource();
        log.trace("customer:" + customer.getId());

        var uri = UriComponentsBuilder.fromUriString("/accounts/search")
                .queryParam("customerId", customer.getId())
                .build().toUri();

        return webClient
                .get()
                .uri(uri.toString())
                .exchangeToMono(response -> response.bodyToMono(new ParameterizedTypeReference<List<Account>>() {
                }))

                .block();


    }
}
