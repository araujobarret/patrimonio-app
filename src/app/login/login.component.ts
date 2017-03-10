import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {User} from "../model/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  erro: boolean;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.erro = false;
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit(){
    let user: User = new User();
    user = this.formLogin.value;
    if(this.auth.onLogin(user))

      else
  }

}
