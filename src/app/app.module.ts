import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./routing";
import {AuthGuard} from "./shared/auth.guard";
import {AuthService} from "./shared/auth.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthGuard, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
