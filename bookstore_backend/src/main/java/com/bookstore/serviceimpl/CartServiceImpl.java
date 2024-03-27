package com.bookstore.serviceimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.dao.CartDao;
import com.bookstore.entity.Book;
import com.bookstore.entity.CartItem;
import com.bookstore.service.BookService;
import com.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartDao cartDao;

    @Autowired
    private BookDao bookDao;

    @Override
    public List<CartItem> getCartItems(int userId)
    {
        return cartDao.getCartItems(userId);
    }

    @Override
    public void updateItemNum(int itemNum, int userId, int itemId)
    {
        cartDao.updateItemNum(itemNum, userId, bookDao.getBookById(itemId));
    }

    @Override
    public void deleteItem(int userId, int itemId)
    {
        cartDao.deleteItem(userId, bookDao.getBookById(itemId));
    }

    @Override
    public void addItem(int userId, int itemId)
    {
        Book b = bookDao.getBookById(itemId);
        CartItem c = cartDao.checkCartItem(b);
        if (c == null) {
            cartDao.addItem(userId, b);
        }
        else {
            cartDao.updateItemNum(c.getItem_num()+1, userId, b);
        }
    }
}
