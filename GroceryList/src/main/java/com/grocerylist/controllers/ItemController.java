package com.grocerylist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grocerylist.models.Item;
import com.grocerylist.service.ItemService;

@RestController
@RequestMapping("grocery-lists")
public class ItemController {
	@Autowired
	private ItemService itemService;
	
	@GetMapping
	public List<Item> findAll() {
		return itemService.findAll();
	}
	
	@PostMapping
	public Item createNewItem(@RequestBody Item newItem) {
		return itemService.createNewItem(newItem);
	}

}
