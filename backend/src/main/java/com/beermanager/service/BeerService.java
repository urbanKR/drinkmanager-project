package com.beermanager.service;

import com.beermanager.exception.BeerNotFoundException;
import com.beermanager.model.Beer;
import com.beermanager.repo.BeerRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BeerService {
    private final BeerRepo beerRepo;

    @Autowired
    public BeerService(BeerRepo beerRepo) {
        this.beerRepo = beerRepo;
    }

    public Beer addBeer(Beer beer) {
        beer.setBeerCode(UUID.randomUUID().toString());
        return beerRepo.save(beer);
    }

    public List<Beer> findAllBeers() {
        return beerRepo.findAll();
    }

    public Beer updateBeer(Beer beer) {
        return beerRepo.save(beer);
    }

    public Beer findBeerById(Long id) {
        return beerRepo.findBeerById(id)
                .orElseThrow(() -> new BeerNotFoundException("Beer with id: "+id+"was not found!"));
    }

    @Transactional
    public void deleteBeer(Long id) {
        beerRepo.deleteBeerById(id);
    }
}
