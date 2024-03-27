package com.bookstore.daoimpl;

import com.bookstore.dao.OrderDao;
import com.bookstore.entity.Order;
import com.bookstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> getOrder(int user_id)
    {
        return orderRepository.getOrder(user_id);
    }

    @Override
    public List<Order> getOrders() {
        return orderRepository.getOrders();
    }

    @Override
    public void save(Order order)
    {
        orderRepository.save(order);
    }
}
