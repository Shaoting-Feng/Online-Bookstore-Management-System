package com.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "users")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class User {
    @Id
    @Column(name="id")
    private int id;
    @Column(name="username")
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="address")
    private String address;
    @Column(name="ident")
    private boolean ident;
    @Column(name="forbidden")
    private boolean forbidden;

    private List<String> emails = new ArrayList<String>();

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable( name = "emails",
            joinColumns = { @JoinColumn(name = "user_id", referencedColumnName = "id")})
    @Column(name = "email")
    public List<String> getEmails() {
        return emails;
    }

    public void setEmails(List<String> emails) {
        this.emails = emails;
    }

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public int getId()
    {
        return id;
    }

    public User() {}

    public User(String username, String password, String address, List<String> emails) {
        this.username = username;
        this.address = address;
        this.password = password;
        this.emails = emails;
        this.ident = false;
        this.forbidden = false;
    }

    public boolean getIdent() {
        return this.ident;
    }

    public boolean getForbidden() {
        return this.forbidden;
    }

    public void setForbidden(boolean forbidden) {
        this.forbidden = forbidden;
    }
}