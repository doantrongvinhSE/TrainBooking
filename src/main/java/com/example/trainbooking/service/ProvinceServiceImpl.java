package com.example.trainbooking.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.trainbooking.dto.ProvinceDto;
import com.example.trainbooking.entity.Province;
import com.example.trainbooking.repository.ProvinceRepository;

@Service
public class ProvinceServiceImpl implements ProvinceService {
    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    public List<ProvinceDto> getAllProvinces() {
        List<Province> provinces = provinceRepository.findAll();
        return provinces.stream().map(province -> new ProvinceDto(province.getId(), province.getName(), province.getDivisionType())).collect(Collectors.toList());
    }

    
    
}
