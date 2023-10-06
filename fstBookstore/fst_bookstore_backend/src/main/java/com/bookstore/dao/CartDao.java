package com.bookstore.dao;

import com.bookstore.entity.Book;
import com.bookstore.entity.CartItem;
import java.util.List;

public interface CartDao {
    List<CartItem> getCartItems(int userId);
    CartItem checkCartItem(Book item);
    void updateItemNum(int itemNum, int userId, Book item);
    void deleteItem(int userId, Book item);
    void addItem(int userId, Book item);
}
