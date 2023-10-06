package com.bookstore.dao;

import com.bookstore.entity.Order;
import java.util.List;

public interface OrderDao {
    List<Order> getOrder(int userId);
    List<Order> getOrders();
    void save(Order order);
}
