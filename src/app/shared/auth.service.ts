import {Injectable } from '@angular/core';
import { User } from "../model/user";
import { Router } from "@angular/router";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    isLogged: boolean;

    constructor(private router: Router, private cookie: CookieService, private http: Http){}

    // Check if the user has a cookie with a valid JWT
    checkCookie() : boolean{
        this.cookie.put('teste', 'teste', {expires: new Date()});
        if(this.cookie.get('patrimonioapp2'))
            console.log(this.cookie.get('patrimonioapp2'));
        return true;
    }

    checkJwt(jsonObj: any){
        if(jsonObj.erro){
            console.error("Erro: " + jsonObj.erro);
        }
        else {
            console.log("Checar se o cookie existe e se é válido");
        }
    }

    onLogin(user: User) : boolean{
        this.login(user).subscribe(
            (data: any) => {
                this.checkJwt(data);
                return false;
            },
            err => {
                console.error("Error: " + err);
                return true;
            }
        );
    }

    login(user: User) : Observable<any> {
        return this.http.get("http://localhost/web/autenticar.php?login="+user.login+"&senha="+user.senha)
            .map((res: Response) => res.json());
    }

    isAuthenticated(user: User){
        return true;
    }

}