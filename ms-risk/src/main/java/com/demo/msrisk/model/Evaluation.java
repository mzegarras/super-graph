package com.demo.msrisk.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "evaluations")
public class Evaluation {

    @Id
    private int id;
    @Column("calificacionBCP")
    private String calificacionBCP;

    @Column("calificacionSBS")
    private String calificacionSBS;

    @Column("customerId")
    private int customerId;
}
