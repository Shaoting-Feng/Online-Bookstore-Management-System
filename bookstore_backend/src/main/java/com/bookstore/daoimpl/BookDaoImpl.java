package com.bookstore.daoimpl;

import com.bookstore.dao.BookDao;
import com.bookstore.entity.Book;
import com.bookstore.entity.User;
import com.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.LinkedList;
import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        return bookRepository.getBooks();
    }

    @Override
    public Book getBookById(int id) {
        return bookRepository.getOne(id);
    }

    @Override
    public List<Book> getBooksByIds(List<Integer> ids) {
        LinkedList<Book> list = new LinkedList<>();
        for (int id : ids) {
            list.add(bookRepository.getOne(id));
        }
        return list;
    }

    @Override
    public void modifyInventory(int id, int diff) {
        bookRepository.modifyInventory(id, diff);
    }

    @Override
    public void changeBook(int id, String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description) {
        bookRepository.modifyName(id, name);
        bookRepository.modifyAuthor(id, author);
        bookRepository.modifyImage(id, image);
        bookRepository.modifyStock(id, inventory);
        bookRepository.modifyISBN(id, ISBN);
        bookRepository.modifyDollar(id, dollar);
        bookRepository.modifyCent(id, cent);
        bookRepository.modifyDescription(id, description);
    }

    @Override
    public void addBook(String name, String author, String image, int inventory, String ISBN, int dollar, int cent, String description) {
        bookRepository.save(new Book(name, author, image, inventory, ISBN, dollar, cent, description));
    }

    @Override
    public void deleteBook(int id)
    {
        bookRepository.deleteById(id);
    }
}
