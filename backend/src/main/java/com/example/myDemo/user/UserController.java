package com.example.myDemo.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class UserController {

	@Autowired
	private UsersHardcodedService userManagementService;
	// Get all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userManagementService.findAll();
	}
	// Get a user by Id
	@GetMapping("/users/{id}")
	public User getUser(@PathVariable long id) {
		try{
			User resultUser = userManagementService.findById(id);
			return resultUser;
		}
		catch(Exception e){
			e.getMessage();
			return null;
		}
	}
	// Delete a user by Id
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable long id) {
		try{
			User user = userManagementService.deleteById(id);
			if (user != null) {
				return ResponseEntity.noContent().build();
			}
			return ResponseEntity.notFound().build();
		}
		catch(Exception e){
			e.getMessage();
			return null;
		}
	}
	// Update a user
	@PutMapping("/users")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		try{
			userManagementService.save(user);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		catch(Exception e){
			e.getMessage();
			return null;
		}
	}
	// Create a user
	@PostMapping("/users")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		try{ 
			userManagementService.save(user);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		catch(Exception e){
			e.getMessage();
			return null;
		}
	}

}