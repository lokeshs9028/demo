package com.example.controller;

// import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.entity.BlackCofferClass;
import com.example.repository.BlackCofferRepo;

// import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/data")
public class BlackCofferController {
    @Autowired
    private BlackCofferRepo repo;

    @GetMapping("/all")
    public List<BlackCofferClass> getAllData() {
        return repo.findAll();
    }
}
