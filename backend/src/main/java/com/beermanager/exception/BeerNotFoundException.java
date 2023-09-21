package com.beermanager.exception;

public class BeerNotFoundException extends RuntimeException {
    public BeerNotFoundException(String msg) {
        super(msg);
    }
}
