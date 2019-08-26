package com.grocerylist.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocerylist.models.GroceryList;


public interface ListRepo  extends JpaRepository<GroceryList, Integer> {

}
