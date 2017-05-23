import { Injectable } from '@angular/core';

@Injectable()
export class EncryptionService {
	private prefix:string = "Resistance !"; 
	private suffix:string = "Hypocrites !"; 
  	constructor() {}

  	compare(password1, password2) {
  		return this.encode(password1) === this.encode(password2);
  	}
  	encode(password) {
  		return btoa(this.getPrefix() + password + this.getSuffix());
  	}
  	getPrefix() {
  		return this.prefix;
  	}
  	getSuffix() {
  		return this.suffix;
  	}

}
