import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {
	users:any[];

  	constructor(database:AngularFireDatabase) { 
  		database.list('/users').subscribe(users=> {
  			this.users = users
  		});
  	}

}
