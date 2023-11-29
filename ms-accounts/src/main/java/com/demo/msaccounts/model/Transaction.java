package com.demo.msaccounts.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "transactions")
public class Transaction {

    @Id
    private int id;
    private String fecha;
    private String hora;
    private double amount;
    private int currency;
    @Column("accountId")
    private int accountId;

}
