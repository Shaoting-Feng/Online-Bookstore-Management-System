package com.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cart_items")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class CartItem {
    @Id
    @Column(name="id")
    private int id;
    @Column(name="user_id")
    private int user_id;
    @Column(name="item_num")
    private int item_num;

    private Book item;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JoinColumn(name = "item_id", referencedColumnName = "id")
    public Book getItem() { return item; }

    public void setItem(Book item) { this.item = item; }

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public int getId()
    {
        return id;
    }

    public CartItem() {}

    public CartItem(int userId, Book item) {
        this.user_id = userId;
        this.item = item;
        this.item_num = 1;
    }
}