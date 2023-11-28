package com.demo.mscustomers.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "CUSTOMERS")
public class Customer {

    @Id
    private int id;
    private String name;

    @Column("lastName")
    private String lastName;

    private String address;

    @Column("documentType")
    private String documentType;

    @Column("documentNumber")
    private String documentNumber;
}
