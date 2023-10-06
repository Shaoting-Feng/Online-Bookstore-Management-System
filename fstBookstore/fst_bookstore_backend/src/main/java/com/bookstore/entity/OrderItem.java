package com.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

@Data
@Entity
@Table(name = "order_items")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class OrderItem {
    @Id
    @Column(name="id")
    private int id;
    @Column(name="item_num")
    private int item_num;
    @Column(name="item_id")
    private int item_id;
    @Column(name="dollar")
    private int dollar;
    @Column(name="cent")
    private int cent;
    @Column(name="image")
    private String image;
    @Column(name="name")
    private String name;

    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", referencedColumnName="id")
    public Order getOrder() { return order; }

    public void setOrder(Order order) { this.order = order; }

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public int getId()
    {
        return id;
    }

    public OrderItem() {}
    public OrderItem(Order order, int itemNum, int item_id, int dollar, int cent, String image, String name) {
        this.order = order;
        this.item_num = itemNum;
        this.dollar = dollar;
        this.cent = cent;
        this.image = image;
        this.name = name;
        this.item_id = item_id;
    }
}