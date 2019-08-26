package com.grocerylist.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grocerylist.models.Item;


public interface ItemRepo  extends JpaRepository<Item, Integer> {

}
