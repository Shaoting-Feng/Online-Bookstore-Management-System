package com.bookstore.controller;

import com.bookstore.entity.CartItem;
import com.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @RequestMapping("/getCartItems")
    public List<CartItem> getCartItems(@RequestParam("userId") int userId)
    {
        return cartService.getCartItems(userId);
    }

    @RequestMapping("/updateItemNum")
    public void updateItemNum(@RequestParam("itemNum") int itemNum,
                              @RequestParam("userId") int userId,
                              @RequestParam("itemId") int itemId)
    {
        cartService.updateItemNum(itemNum, userId, itemId);
    }

    @RequestMapping("/deleteItem")
    public void deleteItem(@RequestParam("userId") int userId,
                           @RequestParam("itemId") int itemId)
    {
        cartService.deleteItem(userId, itemId);
    }

    @RequestMapping("/addItem")
    public void addItem(@RequestParam("userId") int userId,
                        @RequestParam("itemId") int itemId)
    {
        cartService.addItem(userId, itemId);
    }
}