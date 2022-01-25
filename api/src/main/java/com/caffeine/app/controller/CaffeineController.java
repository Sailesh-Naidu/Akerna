package com.caffeine.app.controller;

import com.caffeine.app.models.CaffeineLimitResponse;
import com.caffeine.app.models.Drink;
import com.caffeine.app.models.DrinkResponse;
import com.caffeine.app.service.CaffeineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/")
public class CaffeineController {

    @Autowired
    private CaffeineService caffeineService;

    @GetMapping("")
    public String index() throws InterruptedException {
        return "API_LIVE";
    }

    @PostMapping("/init")
    @PostConstruct
    public List<Drink> createDrinks() {
        return caffeineService.createDrinks();
    }

    @GetMapping("/drinks")
    public List<DrinkResponse> getDrinks() throws InterruptedException {
        return caffeineService.getDrinks();
    }

    @GetMapping("/caffeineLimit")
    public CaffeineLimitResponse getCaffeineLimit(
            @RequestParam(value = "drink") String drink,
            @RequestParam(value = "quantity") Integer count
    ) throws InterruptedException {
        return caffeineService.getCaffeineLimitResponse(drink.trim(), count);
    }
}
