package com.beermanager.repo;

import com.beermanager.model.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BeerRepo extends JpaRepository<Beer, Long> {
    void deleteBeerById(Long id);
    Optional<Beer> findBeerById(Long id);
}
