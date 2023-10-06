package com.bookstore.controller;

import com.bookstore.entity.Book;
import com.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping("/getBooks")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @RequestMapping("/getBookById")
    public Book getBookById(@RequestParam("id") int id) {
        return bookService.getBookById(id);
    }

    @RequestMapping("/getBooksByIds")
    public List<Book> getBooksByIds(@RequestParam("ids") List<Integer> ids) {
        return bookService.getBooksByIds(ids);
    }

    @RequestMapping("/changeBook")
    public void changeBook(@RequestParam("id") int id,
                           @RequestParam("name") String name,
                           @RequestParam("author") String author,
                           @RequestParam("image") String image,
                           @RequestParam("inventory") int inventory,
                           @RequestParam("ISBN") String ISBN,
                           @RequestParam("dollar") int dollar,
                           @RequestParam("cent") int cent,
                           @RequestParam("description") String description
                           ) {
        bookService.changeBook(id, name, author, image, inventory, ISBN, dollar, cent, description);
    }

    @RequestMapping("/addBook")
    public void addBook(@RequestParam("name") String name,
                        @RequestParam("author") String author,
                        @RequestParam("image") String image,
                        @RequestParam("inventory") int inventory,
                        @RequestParam("ISBN") String ISBN,
                        @RequestParam("dollar") int dollar,
                        @RequestParam("cent") int cent,
                        @RequestParam("description") String description
    ) {
        bookService.addBook(name, author, image, inventory, ISBN, dollar, cent, description);
    }

    @RequestMapping("/deleteBook")
    public void deleteItem(@RequestParam("id") int id)
    {
        bookService.deleteBook(id);
    }
}
