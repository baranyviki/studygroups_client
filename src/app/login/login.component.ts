import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

  invalidLogin: boolean;

  ngOnInit() {
  }

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.loginService.loginAUT(credentials).
    subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("username", form.value.Username);
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      console.log(localStorage.getItem("username"));
      console.log(form.value.Username);
      this.router.navigate(["/study-buddy"]);
    }, err => {
      this.invalidLogin = true;
      //TODO: ERROR HANDLING!
    });
  }

  
logOut() {
   localStorage.removeItem("jwt");
}


}
