package com.example.trainbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.trainbooking.entity.Province;


@Repository
public interface ProvinceRepository extends JpaRepository<Province, Long> {
}
