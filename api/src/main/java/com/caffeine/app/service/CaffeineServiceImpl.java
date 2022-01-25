package com.caffeine.app.service;

import com.caffeine.app.models.CaffeineLimitResponse;
import com.caffeine.app.models.Drink;
import com.caffeine.app.models.DrinkResponse;
import com.caffeine.app.repository.DrinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CaffeineServiceImpl implements CaffeineService {

    @Value("${caffeine.drinks}")
    private String drinksToSave;

    @Autowired
    DrinkRepository drinkRepository;

    @Override
    public List<Drink> createDrinks() {
        List<Drink> drinks = drinkRepository.findAll();
        if(drinks == null || drinks.size() == 0) {
            for(String drinkToSave: drinksToSave.split("\n")) {
                System.out.println(drinkToSave);
                System.out.println(drinkToSave.split("\\|")[0]);
                Drink drink = new Drink(
                        drinkToSave.split("\\|")[0],
                        drinkToSave.split("\\|")[1],
                        drinkToSave.split("\\|")[2],
                        drinkToSave.split("\\|")[3]
                );
                drinks.add(drink);
            }
            drinkRepository.saveAll(drinks);
        }
        return drinks;
    }

    @Override
    public List<DrinkResponse> getDrinks() {
        List<DrinkResponse> drinkNames = new ArrayList<>();
        List<Drink> drinks = drinkRepository.findAll();
        for (Drink drink: drinks) {
            drinkNames.add(new DrinkResponse(
                    drink.getId(),
                    drink.getDrinkName(),
                    drink.getCaffeineAmount()
            ));
        }
        return drinkNames;
    }

    @Override
    public CaffeineLimitResponse getCaffeineLimitResponse(String drink, Integer count) {
        System.out.println(drink);
        Drink drinkFroDB = drinkRepository.findById(Long.valueOf(drink)).get();
        Integer caffeineMg = Integer.valueOf(drinkFroDB.getCaffeineAmount());
        Integer servings = Integer.valueOf(drinkFroDB.getServings());
        System.out.println(caffeineMg * servings * count);
        System.out.println(((caffeineMg * servings * count) + (servings * caffeineMg)));
        if (caffeineMg * servings * count > 500) {
            return new CaffeineLimitResponse("red", "You've already crossed your caffeine limit!!! You cant consume any more");
        } else if (caffeineMg * servings * count < 500 && ((caffeineMg * servings * count) + (servings * caffeineMg)) > 500) {
            return new CaffeineLimitResponse("amber", "You are dangerously close to crossing your caffeine limit. You can't consume any more!");
        } else {
            int remainderDrinks = (500 - caffeineMg * servings * count) / (caffeineMg * servings);
            return new CaffeineLimitResponse("green", "You are within your caffeine limit. You can consume " + remainderDrinks + " cans more.");
        }
    }
}
