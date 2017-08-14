import {Injectable } from '@angular/core';
import { User } from "../model/user";
import { Router } from "@angular/router";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

    constructor(private router: Router, private cookie: CookieService, private http: Http){}

    isAuthenticated(user: User) : boolean {
        return false;
    }

}