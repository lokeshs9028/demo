package com.example.repository;

import com.example.entity.BlackCofferClass;
import java.math.BigInteger;
import java.util.List;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.web.JsonPath;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.web.ProjectedPayload;

@ProjectedPayload
@Repository
public interface BlackCofferRepo extends JpaRepository<BlackCofferClass, BigInteger> {

    List<BlackCofferClass> findAll();

}
