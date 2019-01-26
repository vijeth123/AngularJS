package com.shopping.service;

import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/shopping")
public class ShoppingService {
    @RequestMapping("/items")
    public List<String> getItems(){
        return Arrays.asList("T-shirt", "Jeans", "Formal-Shirt", "Laptop", "Bags");
    }

    @RequestMapping(value = "/company", produces = MediaType.TEXT_PLAIN_VALUE)
    public String getCompany(){
        return "Made in India";
    }
}
