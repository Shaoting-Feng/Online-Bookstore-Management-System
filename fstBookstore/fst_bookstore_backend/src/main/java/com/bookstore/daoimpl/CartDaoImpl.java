package com.bookstore.daoimpl;

import com.bookstore.dao.CartDao;
import com.bookstore.entity.Book;
import com.bookstore.entity.CartItem;
import com.bookstore.entity.User;
import com.bookstore.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {
    @Autowired
    private CartRepository cartRepository;

    @Override
    public CartItem checkCartItem(Book item) {
        return cartRepository.checkCartItem(item);
    }

    @Override
    public List<CartItem> getCartItems(int userId)
    {
        return cartRepository.getCartItems(userId);
    }

    @Override
    public void updateItemNum(int itemNum, int userId, Book item)
    {
        if (itemNum == 0) {
            cartRepository.deleteItem(userId, item);
        }
        else if (itemNum > 0) {
            cartRepository.updateItemNum(itemNum, userId, item);
        }
    }

    @Override
    public void deleteItem(int userId, Book item)
    {
        cartRepository.deleteItem(userId, item);
    }

    @Override
    public void addItem(int userId, Book item)
    {
        cartRepository.save(new CartItem(userId, item));
    }
}
