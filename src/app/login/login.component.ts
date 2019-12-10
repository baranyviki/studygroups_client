import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../shared/error-handler.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router, private errorHandler: ErrorHandlerService, private dialog:MatDialog ) { }

  invalidLogin: boolean;
  public errorMessage: string = '';

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
        this.router.navigate(["/study-buddy"]);
      }, (err) => {
        this.invalidLogin = true;
        this.errorMessage = err.error.Message;
        //this.errorHandler.handleError(err);
      });
  }


  logOut() {
    localStorage.removeItem("jwt");
  }


}
