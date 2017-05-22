import { Route } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

export const Routes: Route[] = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
]