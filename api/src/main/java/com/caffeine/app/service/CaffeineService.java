package com.caffeine.app.service;

import com.caffeine.app.models.CaffeineLimitResponse;
import com.caffeine.app.models.Drink;
import com.caffeine.app.models.DrinkResponse;

import java.util.List;

public interface CaffeineService {
    List<Drink> createDrinks();

    List<DrinkResponse> getDrinks();

    CaffeineLimitResponse getCaffeineLimitResponse(String drink, Integer count);
}
