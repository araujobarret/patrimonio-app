import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";
import { User } from "../model/user";

@Injectable() export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        if(this.auth.isAuthenticated(new User()))
            return true;
        else{
            this.router.navigate(['./login']);
            return false;
        }
    }
}