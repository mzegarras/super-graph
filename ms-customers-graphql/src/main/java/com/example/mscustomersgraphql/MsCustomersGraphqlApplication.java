package com.example.mscustomersgraphql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class MsCustomersGraphqlApplication {


    public static void main(String[] args) {
        SpringApplication.run(MsCustomersGraphqlApplication.class, args);
    }

}
