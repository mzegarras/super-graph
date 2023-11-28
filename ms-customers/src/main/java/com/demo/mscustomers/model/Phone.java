package com.demo.mscustomers.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "phones")
public class Phone {

    @Id
    private int id;
    private String phone;
    private String company;

    @Column("customerId")
    private int customerId;

}
