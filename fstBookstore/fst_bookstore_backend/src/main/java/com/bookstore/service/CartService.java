package com.bookstore.service;

import com.bookstore.entity.CartItem;
import java.util.List;

public interface CartService {
    List<CartItem> getCartItems(int userId);
    void updateItemNum(int itemNum, int userId, int itemId);
    void deleteItem(int userId, int itemId);
    void addItem(int userId, int itemId);
}
