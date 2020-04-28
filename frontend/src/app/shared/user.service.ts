
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/users';    
  myUser: User;
  users: object;
  // Costractor with HttpClient argument
  constructor(private http: HttpClient) { }
  // Create new FormGroup
  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });
  // Initialize FormGroup
  initializeFormGroup() {
    this.form.setValue({
      $id: null,
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }
  // Get all users
  getUsers(){
    this.users = this.http.get(this.baseUrl);
    return this.http.get(this.baseUrl);
  }
  // Add new user
  addUsers(user: any){
    const url = this.baseUrl + "/save-user";
    this.myUser = new User();
    this.myUser.firstName = user.firstName;
    this.myUser.lastName = user.lastName;
    this.myUser.email = user.email;
    this.myUser.city = user.city;
    this.myUser.mobile = user.mobile;
    this.myUser.gender = user.gender;
    this.myUser.department = user.department;
    this.myUser.hireDate = user.hireDate;
    this.myUser.status = "1";
    this.myUser.description = "myDesc";
    this.myUser.id = 0;

    return this.http.post(this.baseUrl, this.myUser).subscribe(data => this.users = this.getUsers());
  }
  // Edit current user  
  editUsers(user: any){
    const url = this.baseUrl + "/save-user";
    this.myUser = new User();
    this.myUser.firstName = user.firstName;
    this.myUser.lastName = user.lastName;
    this.myUser.email = user.email;
    this.myUser.city = user.city;
    this.myUser.mobile = user.mobile;
    this.myUser.gender = user.gender;
    this.myUser.department = user.department;
    this.myUser.hireDate = user.hireDate;
    this.myUser.status = "1";
    this.myUser.description = "myDesc";
    this.myUser.id = user.$id;
        
    return this.http.post(this.baseUrl, this.myUser).subscribe(data => this.users = this.getUsers());
  }
  // Method for set form fields
  populateForm(user: any){
    this.form.setValue({
      $id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
      city: user.city,
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }
  // Delete user
  deleteUser (user: User){
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
