package com.bookstore.controller;

import com.bookstore.entity.Order;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @RequestMapping("/getOrdersByUserId")
    public List<Order> getOrdersByUserId(@RequestParam("userId") int userId)
    {
        return orderService.getOrdersByUserId(userId);
    }

    @RequestMapping("/getOrders")
    public List<Order> getOrders()
    {
        return orderService.getOrders();
    }

    @RequestMapping("/saveOrderWithItems")
    public void saveOrderWithItems(@RequestParam("userId") int userId,
                                   @RequestParam("address") String address,
                                   @RequestParam("itemIds") List<Integer> itemIds,
                                   @RequestParam("itemNums") List<Integer> itemNums,
                                   @RequestParam("district") String district,
                                   @RequestParam("zip") String zip,
                                   @RequestParam("email") String email)
    {
        // 记录当前的时间
        long retryDate = System.currentTimeMillis();
        int sec = 28800;
        Timestamp original = new Timestamp(retryDate);
        Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(original.getTime());
        cal.add(Calendar.SECOND, sec);
        Timestamp datetime = new Timestamp(cal.getTime().getTime());

        orderService.saveOrderWithItems(userId, address, datetime, itemIds, itemNums, district, zip, email);
    }
}