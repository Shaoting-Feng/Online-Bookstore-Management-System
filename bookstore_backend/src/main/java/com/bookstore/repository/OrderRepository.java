package com.bookstore.repository;

import com.bookstore.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query("select o from Order o where o.userId=:userId order by o.time desc")
    List<Order> getOrder(@Param("userId") int userId);

    @Query("select orders from Order orders order by orders.time desc")
    List<Order> getOrders();

    @Query("select o from Order o where o.id=:id")
    Order getOrderWithId(@Param("id") int id);
}
