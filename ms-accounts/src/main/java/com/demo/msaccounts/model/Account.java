package com.demo.msaccounts.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "accounts")
public class Account {

    @Id
    private int id;
    private String number;
    private double balance;
    private int currency;
    @Column("customerId")
    private int customerId;

}
