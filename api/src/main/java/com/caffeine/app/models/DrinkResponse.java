package com.caffeine.app.models;

public class DrinkResponse {

    private Long id;

    private String name;

    private String caffeineAmount;

    public DrinkResponse() {
    }

    public DrinkResponse(Long id, String name, String caffeineAmount) {
        this.id = id;
        this.name = name;
        this.caffeineAmount = caffeineAmount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCaffeineAmount() {
        return caffeineAmount;
    }

    public void setCaffeineAmount(String caffeineAmount) {
        this.caffeineAmount = caffeineAmount;
    }
}
