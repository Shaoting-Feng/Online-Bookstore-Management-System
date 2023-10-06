package com.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "books")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Book {
    @Id
    @Column(name="id")
    private int id;
    @Column(name="name")
    private String name;
    @Column(name="author")
    private String author;
    @Column(name="dollar")
    private int dollar;
    @Column(name="cent")
    private int cent;
    @Column(name="inventory")
    private int inventory;
    @Column(name="image")
    private String image;
    @Column(name="ISBN")
    private String ISBN;
    @Column(name="description")
    private String description;

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public int getId() {
        return id;
    }

    public Book() {}

    public Book(String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description) {
        this.name = name;
        this.author = author;
        this.dollar = dollar;
        this.cent = cent;
        this.inventory = inventory;
        this.image = image;
        this.ISBN = ISBN;
        this.description = description;
    }
}