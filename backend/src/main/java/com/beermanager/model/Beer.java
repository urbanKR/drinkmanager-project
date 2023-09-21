package com.beermanager.model;

import jakarta.persistence.*;


import java.io.Serializable;

@Entity
public class Beer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String category;
    private Float alcoholPercentage;
    private Float rating;
    private String imgUrl;
    @Column(nullable = false, updatable = false)
    private String beerCode;

    public Beer() {
    }
    public Beer(String name, String category, Float alcoholPercentage, Float rating, String imgUrl, String beerCode) {
        this.name = name;
        this.category = category;
        this.alcoholPercentage = alcoholPercentage;
        this.rating = rating;
        this.imgUrl = imgUrl;
        this.beerCode = beerCode;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setAlcoholPercentage(Float alcoholPercentage) {
        this.alcoholPercentage = alcoholPercentage;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public void setBeerCode(String beerCode) {
        this.beerCode = beerCode;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public Float getAlcoholPercentage() {
        return alcoholPercentage;
    }

    public Float getRating() {
        return rating;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getBeerCode() {
        return beerCode;
    }

    @Override
    public String toString() {
        return "Beer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", alcoholPercentage=" + alcoholPercentage +
                ", rating=" + rating +
                ", imgUrl='" + imgUrl + '\'' +
                ", beerCode='" + beerCode + '\'' +
                '}';
    }
}
