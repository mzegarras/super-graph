package com.demo.mscustomers.controller;


import com.demo.mscustomers.model.Customer;
import com.demo.mscustomers.model.Phone;
import com.demo.mscustomers.repository.CustomerRepository;
import com.demo.mscustomers.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service){
        this.service=service;
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public Flux<Customer> getAll() {
        return this.service.findAll();
    }

    @GetMapping("/{id}/phones")
    @ResponseStatus(HttpStatus.OK)
    public Flux<Phone> getPhonesAll(@PathVariable("id") int id) {

        return this.service.findPhonesByCustomerId(id);
    }

    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Customer> findByDocument(@RequestParam(name = "documentType") String type,
                                         @RequestParam(name = "documentNumber") String number) {
        return this.service.findByDocument(type,number);
    }
}
