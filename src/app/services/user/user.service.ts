import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {
	users:any[];

  	constructor(private database:AngularFireDatabase) { 
  		/* Alimentation de la variable users */
  		database.list('/users').subscribe(users=> {	this.users = users }); 
  	}


  	login() {

  	}


  	checkPasswordByEmail(email, password) {  		
		for(var user of this.users) {
			if(email.toLowerCase()===user.email.toLowerCase()) {
				console.log(password, user.password);
				if(user.password===password) {
					return true;
				} else {
					return false;
				}
			}
		}
		return false;
  	}
  	checkPasswordByUsername(username, password) {  		
		for(var user of this.users) {
			if(username.toLowerCase()===user.username.toLowerCase()) {
				if(user.password===password) {
					return true;
				} else {
					return false;
				}
			}
		}
		return false;
  	}

  	/* Méthode de création d'un utilisateur */
  	create(user) {
  		let userToCreate = {
  			email: user.email,
  			username: user.username,
  			password: user.password,
  			role: "basic",
  			isActivated: false,
  			isConnected: false
  		}

  		this.database.list('/users').push(userToCreate);
  	}

  	/* Méthodes de validation des différents champs tu type utilisateur	*/
  	isValid(user) {
  		let isValidEmail = this.isValidEmail(user.email) && !this.isExistingEmail(user.email);
  		let isValidUsername = this.isValidUsername(user.username) && !this.isExistingUsername(user.username);
  		let isValidPassword = this.isValidPassword(user.password);
  		let isValidPasswordConfirm = this.isValidPasswordConfirm(user.password, user.passwordConfirm);

  		return isValidEmail && isValidUsername && isValidPassword && isValidPasswordConfirm;
  	}
  	isValidEmail(email) {
  		return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  	}  	
	isExistingEmail(email) {
		let existing = false;
		for(var user of this.users) {
			if(email.toLowerCase()===user.email.toLowerCase()) {
				existing = true;
			}
		}
		return existing;
	}
	isValidUsername(username) {
		return username.match(/^[A-Za-z0-9\_\-]{5,15}$/);
	}
	isExistingUsername(username) {
		let existing = false;
		for(var user of this.users) {
			if(username.toLowerCase()===user.username.toLowerCase()) {
				existing = true;
			}
		}
		return existing;
	}
	isValidPassword(password) {
		return password.match(/^[A-Za-z0-9]{6,20}$/);
	}	
	isValidPasswordConfirm(password, passwordConfirm) {
		return password === passwordConfirm;
	}	
}
