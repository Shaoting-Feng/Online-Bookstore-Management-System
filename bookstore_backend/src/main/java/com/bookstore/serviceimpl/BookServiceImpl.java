package com.bookstore.serviceimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.entity.Book;
import com.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookDao bookDao;

    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public Book getBookById(int id) {
        return bookDao.getBookById(id);
    }

    @Override
    public List<Book> getBooksByIds(List<Integer> ids) {
        return bookDao.getBooksByIds(ids);
    }

    @Override
    public void changeBook(int id, String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description) {
        bookDao.changeBook(id, name, author, image, inventory, ISBN, dollar, cent, description);
    }

    @Override
    public void addBook(String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description) {
        bookDao.addBook(name, author, image, inventory, ISBN, dollar, cent, description);
    }

    @Override
    public void deleteBook(int id) {
        bookDao.deleteBook(id);
    }
}
