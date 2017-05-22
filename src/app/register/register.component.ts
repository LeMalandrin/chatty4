import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
	controls:any[];
	errors:any[];
	user:any;

  	constructor(private userService:UserService) { 
  		this.initUser();
  	}

  	ngOnInit() {
  	}

  	validateEmail() {
  		console.log(this.userService.users);
  	}

  	initUser() {
  		this.user = {
  			email: "",
  			username: "",
  			password: "",
  			passwordConfirm: ""
  		};
  	}
  	initControls() {
  		this.controls['emailGroup'] = "form-group";
  		this.controls['emailInput'] = "form-control";
  		this.controls['usernameGroup'] = "form-group";
  		this.controls['usernameInput'] = "form-control";
  		this.controls['passwordGroup'] = "form-group";
  		this.controls['passwordInput'] = "form-control";
  		this.controls['passwordConfirmGroup'] = "form-group";
  		this.controls['passwordConfirmInput'] = "form-control";
  	}
  	initErrors() {
  		this.errors['email'] = [];
  		this.errors['username'] = [];
  		this.errors['password'] = [];
  		this.errors['passwordConfirm'] = [];
  	}
}
