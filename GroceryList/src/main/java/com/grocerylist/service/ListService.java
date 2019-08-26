package com.grocerylist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocerylist.models.GroceryList;
import com.grocerylist.repo.ListRepo;

@Service
public class ListService {
	
	@Autowired
	private ListRepo listRepo;

	public List<GroceryList> findAll() {
		return listRepo.findAll();
	}

	public GroceryList newGroceryList(GroceryList groceryList) {
		// groceryList.setGroceryList(0);
		return listRepo.save(groceryList);
	}

}
