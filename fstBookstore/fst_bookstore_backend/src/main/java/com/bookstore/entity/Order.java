package com.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@Table(name = "orders")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Order {
    @Id
    @Column(name="id")
    private int id;
    @Column(name="user_id")
    private int userId;
    @Column(name="time")
    private Timestamp time;
    @Column(name="address")
    private String address;
    @Column(name="district")
    private String district;
    @Column(name="zip")
    private String zip;
    @Column(name="email")
    private String email;

    private List<OrderItem> orderItems;

    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.REMOVE,CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REFRESH})
    @JoinColumn(name = "order_id")
    public List<OrderItem> getOrderItems() { return orderItems; }

    public void setOrderItems(List<OrderItem> orderItems) { this.orderItems = orderItems; }

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public int getId()
    {
        return id;
    }

    public Order() {}

    public void setId(int id) {
        this.id = id;
    }

    public void setUserId(int user_id) {
        this.userId = user_id;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}