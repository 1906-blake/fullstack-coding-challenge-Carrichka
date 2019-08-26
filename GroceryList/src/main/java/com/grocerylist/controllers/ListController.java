package com.grocerylist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocerylist.models.GroceryList;
import com.grocerylist.service.ListService;

@RestController
@RequestMapping("lists")
public class ListController {
	
	@Autowired
	private ListService listservice;
	
	@GetMapping
	public List<GroceryList> findAll(){
		return listservice.findAll();
	}
	
	@PostMapping()
	public GroceryList newGroceryList (@RequestBody GroceryList groceryList) {
		return listservice.newGroceryList(groceryList);
	}

}
