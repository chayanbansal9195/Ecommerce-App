package com.springangular.ecom.entity;

import com.springangular.ecom.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String name;

    private UserRole role;

    @Lob //to store large data
    @Column(columnDefinition = "longblob")
    private byte[] img;
}
