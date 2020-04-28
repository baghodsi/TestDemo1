package com.example.myDemo.user;

public class User {
	// All field for any user
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	private String city;
	private String gender;
	private String department;
	private String hireDate;
	private String status;
	private String description;
	// Constructor without any argument
	public User() {
	}
	// Constructor with complet argument
    public User(long id, String firstName, String lastName, String email, String mobile, String city, 
                String gender, String department, String hireDate, String description) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.city = city;
		this.gender = gender;
		this.department = department;
		this.hireDate = hireDate;
		this.description = description;
	}
	// Get user Id
	public Long getId() {
		return id;
	}
	// Set user Id
	public void setId(Long id) {
		this.id = id;
	}
	// Get user firstName
	public String getFirstName() {
		return firstName;
	}
	// Set user firstName
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	// Get user lastName
    public String getLastName() {
		return lastName;
	}
	// Set user lastName
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	// Get user email
    public String getEmail() {
		return email;
	}
	// Set user email
	public void setEmail(String email) {
		this.email = email;
	}
	// Get user cell phone
    public String getMobile() {
		return mobile;
	}
	// Set user cell phone
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	// Get user city name
    public String getCity() {
		return city;
	}
	// Set user city name
	public void setCity(String city) {
		this.city = city;
	}
	// Get user gernder
    public String getGender() {
		return gender;
	}
	// Set user gernder
	public void setGender(String gender) {
		this.gender = gender;
	}
	// Get user department
    public String getDepartment() {
		return department;
	}
	// Set user department
	public void setDepartment(String department) {
		this.department = department;
	}
	// Get user hire date
    public String getHireDate() {
		return hireDate;
	}
	// Set user hire date
	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
	}
	// Get user status
    public String getStatus() {
		return status;
	}
	// Set user status
	public void setStatus(String status) {
		this.status = status;
	}
	// Get user description
    public String getDescription() {
		return description;
	}
	// Set user description
	public void setDescription(String description) {
		this.description = description;
	}
}