package com.bookstore.utils;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class LoginMsg {
    private int status;
    private int userId;
    private String msg;

    public LoginMsg() {}
    public LoginMsg(int status, int userId, String msg) {
        this.status = status;
        this.userId = userId;
        this.msg = msg;
    }

    public String getMsg() {
        return this.msg;
    }
    public int getStatus() {
        return this.status;
    }
    public int getUserId() {
        return this.userId;
    }
}
