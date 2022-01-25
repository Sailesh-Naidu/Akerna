package com.caffeine.app.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "drinks")
public class Drink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String drinkName;

    private String description;

    private String caffeineAmount;

    private String servings;

    public Drink() {
    }

    public Drink(String drinkName, String description, String caffeineAmount, String servings) {
        this.drinkName = drinkName;
        this.description = description;
        this.caffeineAmount = caffeineAmount;
        this.servings = servings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDrinkName() {
        return drinkName;
    }

    public void setDrinkName(String drinkName) {
        this.drinkName = drinkName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCaffeineAmount() {
        return caffeineAmount;
    }

    public void setCaffeineAmount(String caffeineAmount) {
        this.caffeineAmount = caffeineAmount;
    }

    public String getServings() {
        return servings;
    }

    public void setServings(String servings) {
        this.servings = servings;
    }
}
