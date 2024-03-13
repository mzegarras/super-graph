package net.csonic.customers.graphql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MsCustomersGraphqlApplication {


    public static void main(String[] args) {
        SpringApplication.run(MsCustomersGraphqlApplication.class, args);
    }
/*
    @Configuration
    public class InstrumentationConfig {
        @Bean
        @ConditionalOnProperty( prefix = "graphql.tracing",
                name = "enabled", matchIfMissing = true)
        public Instrumentation tracingInstrumentation(){
            return new TracingInstrumentation();
        }
    }*/

}
