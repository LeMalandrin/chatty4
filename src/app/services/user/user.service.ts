import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {
	users:any[];

  	constructor(private database:AngularFireDatabase) { 
  		/* Alimentation de la variable users */
  		database.list('/users').subscribe(users=> {	this.users = users }); 
  	}



  	/* Méthodes de validation des différents champs tu type utilisateur	*/
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
