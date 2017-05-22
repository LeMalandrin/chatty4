import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { Routes } from './config/routes';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { DatabaseConfig } from './config/database.config';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Routes),

    AngularFireModule.initializeApp(DatabaseConfig, 'chatty'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
