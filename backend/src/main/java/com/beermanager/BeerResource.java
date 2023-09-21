package com.beermanager;

import com.beermanager.model.Beer;
import com.beermanager.service.BeerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/beer")
public class BeerResource {
    private final BeerService beerService;

    public BeerResource(BeerService beerService) {
        this.beerService = beerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Beer>> getAllBeers() {
        List<Beer> beers = beerService.findAllBeers();
        return new ResponseEntity<>(beers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Beer> getBeerById(@PathVariable("id") Long id) {
        Beer beer = beerService.findBeerById(id);
        return new ResponseEntity<>(beer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Beer> addBeer(@RequestBody Beer beer) {
        Beer newBeer = beerService.addBeer(beer);
        return new ResponseEntity<>(newBeer, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Beer> updateBeer(@RequestBody Beer beer) {
        Beer updatedBeer = beerService.updateBeer(beer);
        return new ResponseEntity<>(updatedBeer, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBeer(@PathVariable("id") Long id) {
        beerService.deleteBeer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
