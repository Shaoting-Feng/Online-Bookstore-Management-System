package com.bookstore.service;

import com.bookstore.entity.Order;
import java.sql.Timestamp;
import java.util.List;

public interface OrderService {
    List<Order> getOrdersByUserId(int userId);
    List<Order> getOrders();
    void saveOrderWithItems(int userId, String address, Timestamp datetime, List<Integer> itemIds, List<Integer> itemNums, String district, String zip, String email);
}
