package com.example.myDemo.hero;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class HeroesHardcodedService {

	private static List<Hero> heroes = new ArrayList<>();
	private static long idCounter = 0;
	// Add hard code record
	static {
		heroes.add(new Hero(++idCounter, "10001", "Ali", "26", "123456"));
		heroes.add(new Hero(++idCounter, "10001", "Hamid", "45", "545456"));
		heroes.add(new Hero(++idCounter, "10002", "Vali", "52", "214555"));
		heroes.add(new Hero(++idCounter, "10002", "Hamed", "18", "546888"));
		heroes.add(new Hero(++idCounter, "10001", "Yaser", "34", "788655"));
	}
	// Get all heroes
	public List<Hero> findAll() {
		return heroes;
	}
	// Save hero record 
	public Hero save(Hero hero) {
		if (hero.getId() == -1 || hero.getId() == 0) {
			hero.setId(++idCounter);
			heroes.add(hero);
		} else {
			heroes.set(getIndexById(hero.getId()), hero);
		}
		return hero;
	} 
	// Get hero by Id
	public int getIndexById(Long id) {
		int index = 0;
		for (Hero hero : heroes) {
			if (hero.getId() == id)
				break;
			else
				index++;
		}
		return index;
	}
	// Delete hero by Id
	public Hero deleteById(long id) {
		Hero hero = findById(id);

		if (hero == null)
			return null;
		if (heroes.remove(hero)) {
			return hero;
		}
		return null;
	}
	// Find hero by Id
	public Hero findById(long id) {
		for (Hero hero : heroes) {
			if (hero.getId() == id) {
				return hero;
			}
		}
		return null;
	}
}