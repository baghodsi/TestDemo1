package com.example.myDemo.hero;

public class Hero {
	// All field for any hero
	private Long id;
	private String titleId;
	private String name;
	private String age;
	private String cardId;
	private String description;
	// Constructor without any argument
	public Hero() {

	}
	// Constructor with complet argument
	public Hero(long id, String titleId, String name, String age, String cardId) {
		super();
		this.id = id;
		this.titleId = titleId;
		this.name = name;
		this.age = age;
		this.cardId = cardId;
	}
	// Get hero Id
	public Long getId() {
		return id;
	}
	// Set hero Id
	public void setId(Long id) {
		this.id = id;
	}
	// Get hero TitleId
	public String getTitleId() {
		return titleId;
	}
	// Set hero TitleId
	public void setTitleId(String id) {
		this.titleId = id;
	}
	// Get hero name
    public String getName() {
		return name;
	}
	// Set hero name
	public void setName(String name) {
		this.name = name;
	}
	// Get hero age
    public String getAge() {
		return age;
	}
	// Set hero age
	public void setAge(String age) {
		this.age = age;
	}
	// Get hero cardId
    public String getCardId() {
		return cardId;
	}
	// Set hero cardId
	public void setCardId(String cardId) {
		this.cardId = cardId;
	}
	// Get hero description
    public String getDescription() {
		return description;
	}
	// Set hero description
	public void setDescription(String description) {
		this.description = description;
	}
}