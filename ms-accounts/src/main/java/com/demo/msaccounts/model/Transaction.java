package com.demo.msaccounts.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Data
@Table(name = "transactions")
public class Transaction {

    @Id
    private int id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private LocalDateTime fecha;
    private double amount;
    private int currency;
    @Column("accountId")
    private int accountId;

}
