import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
	controls:any[] = [];
	errors:any[] = [];
	user:any;

  	constructor(private userService:UserService, private router:Router) { 
  		this.initUser(); //Initialisation de la variable user
  		this.initControls(); //Initialisation des contrôles du formulaire
  		this.initErrors(); //Initialisation des erreurs
  	}

  	ngOnInit() {
  	}

  	/* Méthode d'initialisation de la variable user */
  	initUser() {
  		this.user = {
  			email: "",
  			username: "",
  			password: "",
  			passwordConfirm: ""
  		};
  	}
  	/* Méthode d'initialisation des contrôles du formulaire */
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
  	/* Méthode d'initialisation des erreurs */
  	initErrors() {
  		this.errors['email'] = [];
  		this.errors['username'] = [];
  		this.errors['password'] = [];
  		this.errors['passwordConfirm'] = [];
  	}

  	/* Méthode de traitement du formulaire */
  	register() {
  		if(this.userService.isValid(this.user)) {  		
  			this.userService.create(this.user);
  			this.router.navigate(['/login']);
  		}
  	}



  	/* Méthode de validation de l'adresse email (sur keyup) */
  	validateEmail() {
  		this.errors['email'] = [];
  		if(this.user.email.length > 0) {
  			if(!this.userService.isValidEmail(this.user.email)) {
  				this.errors['email'].push("L'adresse e-mail saisie est invalide");
  			}
  			if(this.userService.isExistingEmail(this.user.email)) {
  				this.errors['email'].push("Un compte existant est déjà associé à cette adresse e-mail");
  			}
  			this.updateEmailControl();
  		} else {
  			this.resetEmailControl();
  		}
  	}
  	updateEmailControl() {
  		if(this.errors['email'].length>0) {
  			this.controls['emailGroup'] = "form-group has-danger";
  			this.controls['emailInput'] = "form-control form-control-danger";
  		} else {
  			this.controls['emailGroup'] = "form-group has-success";
  			this.controls['emailInput'] = "form-control form-control-success";  			
  		}
  	}
  	resetEmailControl() {
		this.controls['emailGroup'] = "form-group";
		this.controls['emailInput'] = "form-control";    		
  	}
  	/* Méthode de validation du nom d'utilisateur (sur keyup) */
  	validateUsername() {
  		this.errors['username'] = [];
  		if(this.user.username.length > 0) {
  			if(!this.userService.isValidUsername(this.user.username)) {
  				this.errors['username'].push("Le nom d'utilisateur est invalide (5 à 15 caractères, majuscules, miniscules, chiffres et/ou tirets)");
  			}
  			if(this.userService.isExistingUsername(this.user.username)) {
  				this.errors['username'].push("Ce nom d'utilisateur existe déjà");
  			}
  			this.updateUsernameControl();
  		} else {
  			this.resetUsernameControl();
  		}
  	}
  	updateUsernameControl() {
  		if(this.errors['username'].length>0) {
  			this.controls['usernameGroup'] = "form-group has-danger";
  			this.controls['usernameInput'] = "form-control form-control-danger";
  		} else {
  			this.controls['usernameGroup'] = "form-group has-success";
  			this.controls['usernameInput'] = "form-control form-control-success";  			
  		}
  	}
  	resetUsernameControl() {
		this.controls['usernameGroup'] = "form-group";
		this.controls['usernameInput'] = "form-control";    		
  	}
  	/* Méthodes de validation du mot de passe (sur keyup) */
  	validatePassword() {
  		this.errors['password'] = [];
  		if(this.user.password.length > 0) {
  			if(!this.userService.isValidPassword(this.user.password)) {
  				this.errors['password'].push("Le mot de passe est invalide (6 à 20 caractères, majuscules, minuscules et/ou chiffres)");
  			}
  			this.updatePasswordControl();
  		} else {
  			this.resetPasswordControl();
  		}
  		this.validatePasswordConfirm();
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
  	/* Méthodes de validation de la confirmation du mot de passe (sur keyup) */
  	validatePasswordConfirm() {
  		this.errors['passwordConfirm'] = [];
  		if(this.user.passwordConfirm.length > 0) {
  			if(!this.userService.isValidPasswordConfirm(this.user.password, this.user.passwordConfirm)) {
  				this.errors['passwordConfirm'].push("Les 2 mots de passe ne correspondent pas");
  			}
  			this.updatePasswordConfirmControl();
  		} else {
  			this.resetPasswordConfirmControl();
  		}
  	}
  	updatePasswordConfirmControl() {
  		if(this.errors['passwordConfirm'].length>0) {
  			this.controls['passwordConfirmGroup'] = "form-group has-danger";
  			this.controls['passwordConfirmInput'] = "form-control form-control-danger";
  		} else {
  			this.controls['passwordConfirmGroup'] = "form-group has-success";
  			this.controls['passwordConfirmInput'] = "form-control form-control-success";  			
  		}
  	}
  	resetPasswordConfirmControl() {
		this.controls['passwordConfirmGroup'] = "form-group";
		this.controls['passwordConfirmInput'] = "form-control";    		
  	}
  	/* Mettre à jour tous les contrôles */
  	updateAllControls() {
  		this.validateEmail();
  		this.validateUsername();
  		this.validatePassword();
  		this.validatePasswordConfirm();
  	}

  	/* Effacer le contenu du formulaire */
  	resetForm() {
  		this.initUser();
  		this.updateAllControls();
  	}
}
