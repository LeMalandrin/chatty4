import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers: [UserService]
})
export class LoginComponent implements OnInit {
	controls:any[] = [];
	errors:any[] = [];
	user:any;

	constructor(private userService:UserService, private router:Router) {
  		this.initUser(); //Initialisation de la variable user
  		this.initControls(); //Initialisation des contrôles du formulaire
  		this.initErrors(); //Initialisation des erreurs
	}

	ngOnInit() {}

	validateLogin() {
		this.errors['login'] = [];
		if(this.user.login.length>0) {
			if(this.user.login.indexOf('@')>0) {
				if(!this.userService.isExistingEmail(this.user.login)) 
					this.errors['login'].push("L'adresse e-mail saisie n'existe pas");
			} else {
				if(!this.userService.isExistingUsername(this.user.login))  
					this.errors['login'].push("Le nom d'utilisateur saisi n'existe pas");
			}  	
  			this.updateLoginControl();		
		} else {
  			this.resetLoginControl();
		}
	}  	
	updateLoginControl() {
  		if(this.errors['login'].length>0) {
  			this.controls['loginGroup'] = "form-group has-danger";
  			this.controls['loginInput'] = "form-control form-control-danger";
  		} else {
  			this.controls['loginGroup'] = "form-group has-success";
  			this.controls['loginInput'] = "form-control form-control-success";  			
  		}
  	}
  	resetLoginControl() {
		this.controls['loginGroup'] = "form-group";
		this.controls['loginInput'] = "form-control";    		
  	}


	validatePassword() {
		this.errors['password'] = [];
		if(this.user.password.length>0) {
			if(this.user.login.indexOf('@')>0) {
				if(!this.userService.checkPasswordByEmail(this.user.login, this.user.password)) 
					this.errors['password'].push("Le mot de passe entré est incorrect");
			} else {
				if(!this.userService.checkPasswordByUsername(this.user.login, this.user.password))  
					this.errors['password'].push("Le mot de passe entré est incorrect");
			}  	
  			this.updatePasswordControl();		
		} else {
  			this.resetPasswordControl();
		}
	}  	
	updatePasswordControl() {
  		if(this.errors['password'].length>0) {
  			this.controls['passwordGroup'] = "form-group has-danger";
  			this.controls['passwordInput'] = "form-control form-control-danger";
  		} else {
  			this.controls['passwordGroup'] = "form-group has-success";
  			this.controls['passwordInput'] = "form-control form-control-success";  			
  		}
  	}
  	resetPasswordControl() {
		this.controls['passwordGroup'] = "form-group";
		this.controls['passwordInput'] = "form-control";    		
  	}




	/* Méthode d'initialisation de la variable user */
  	initUser() {
  		this.user = {
  			login: "",
  			password: ""
  		};
  	}
  	/* Méthode d'initialisation des contrôles du formulaire */
  	initControls() {
  		this.controls['loginGroup'] = "form-group";
  		this.controls['loginInput'] = "form-control";
  		this.controls['passwordGroup'] = "form-group";
  		this.controls['passwordInput'] = "form-control";
  	}
  	/* Méthode d'initialisation des erreurs */
  	initErrors() {
  		this.errors['login'] = [];
  		this.errors['password'] = [];
  	}

}
