package com.bookstore.serviceimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.dao.CartDao;
import com.bookstore.dao.OrderDao;
import com.bookstore.entity.Book;
import com.bookstore.entity.CartItem;
import com.bookstore.entity.Order;
import com.bookstore.entity.OrderItem;
import com.bookstore.service.BookService;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;

    @Autowired
    private BookDao bookDao;

    @Autowired
    private CartDao cartDao;

    @Override
    public List<Order> getOrdersByUserId(int userId)
    {

        return orderDao.getOrder(userId);
    }

    @Override
    public List<Order> getOrders()
    {
        return orderDao.getOrders();
    }

    @Override
    public void saveOrderWithItems(int userId, String address, Timestamp datetime, List<Integer> itemIds, List<Integer> itemNums, String district, String zip, String email)
    {
        // 创建新订单order
        Order order = new Order();
        order.setUserId(userId);
        order.setTime(datetime);
        order.setAddress(address);
        order.setDistrict(district);
        order.setZip(zip);
        order.setEmail(email);
        List<OrderItem> itemList = new ArrayList<>();

        int j = 0;
        for (Integer itemId : itemIds) {
            Book b = bookDao.getBookById(itemId);

            // 库存相应减少
            bookDao.modifyInventory(itemId, -itemNums.get(j));

            // 购物车数量相应减少
            CartItem c = cartDao.checkCartItem(b);
            if (c != null) cartDao.updateItemNum(c.getItem_num()-itemNums.get(j), userId, b);

            // 编辑order的orderItems属性
            OrderItem item = new OrderItem();
            item.setItem_id(itemId);
            item.setItem_num(itemNums.get(j));
            item.setDollar(b.getDollar());
            item.setCent(b.getCent());
            item.setImage(b.getImage());
            item.setName(b.getName());
            item.setOrder(order);
            itemList.add(item);

            j = j + 1;
        }
        order.setOrderItems(itemList);

        // 保存订单
        orderDao.save(order);
    }
}
