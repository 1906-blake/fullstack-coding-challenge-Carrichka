package com.grocerylist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocerylist.models.Item;
import com.grocerylist.repo.ItemRepo;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepo itemrepo;
	
	public List<Item> findAll() {
		return itemrepo.findAll();
	}

	public Item createNewItem(Item newItem) {
		return itemrepo.save(newItem);
	}

}
