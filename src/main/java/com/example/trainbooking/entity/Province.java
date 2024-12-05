package com.example.trainbooking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "provinces")
public class Province {
    @Id
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "code")
    private Integer code;

    @Column(name = "division_type")
    private String divisionType;

    @Column(name = "codename")
    private String codename;

    @Column(name = "phone_code")
    private Integer phoneCode;

    public Province() {
    }
}
