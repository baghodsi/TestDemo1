package com.example.myDemo.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UsersHardcodedService {

	private static List<User> users = new ArrayList<>();
	private static long idCounter = 0;
	// Add hard code record
	static {
		users.add(new User(++idCounter, "Ali", "Alian", "ali@gmail.com", "0912123456","tehran", "1", "1", "3/25/2019", ""));
		users.add(new User(++idCounter, "Hamid", "Hamidian", "hamid@gmail.com", "0912545456","tehran", "1", "1", "3/25/2019", ""));
		users.add(new User(++idCounter, "Vali", "Valian", "vali@gmail.com52", "0912214555","tehran", "1", "1", "3/25/2019", ""));
		users.add(new User(++idCounter, "Hamed", "Hamedian", "hamed@gmail.com", "0912546888","tehran", "1", "1", "3/25/2019", ""));
		users.add(new User(++idCounter, "Yaser", "Yaserian", "yaser@gmail.com", "0912788655","tehran", "1", "1", "3/25/2019", ""));
	}
	// Get all users
	public List<User> findAll() {
		return users;
	}
	// Save user record 
	public User save(User user) {
		if (user.getId() == -1 || user.getId() == 0) {
			user.setId(++idCounter);
			users.add(user);
		} else {
			users.set(getIndexById(user.getId()), user);
		}
		return user;
	}
	// Get user by Id
	public int getIndexById(Long id) {
		int index = 0;
		for (User user : users) {
			if (user.getId() == id)
				break;
			else
				index++;
		}
		return index;
	}
	// Delete user by Id
	public User deleteById(long id) {
		User user = findById(id);
		if (user == null)
			return null;
		if (users.remove(user)) {
			return user;
		}
		return null;
	}
	// Find user by Id
	public User findById(long id) {
		for (User user : users) {
			if (user.getId() == id) {
				return user;
			}
		}
		return null;
	}
}