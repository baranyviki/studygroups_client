import { Component, OnInit, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Output() public logout = new EventEmitter();
  isLoggedInStudent: boolean = false;
  isLoggedInAdmin: boolean = false;

  currentUserRole :string;

  constructor(private router: Router, private jwtHelperService: JwtHelperService, private loginService:LoginService) {
    this.loginService.currentUserRole.subscribe(x => this.currentUserRole = x);
   }

  ngOnInit() {
    //this.onAuth();
  }

  public onAuth() {
    let token = localStorage.getItem("jwt");
    if (token) {
      let decodedToken = this.jwtHelperService.decodeToken(token);
      if (decodedToken['Role'] == 'Admin') {
        this.isLoggedInAdmin = true;
      }
      if (decodedToken['Role'] == 'Student') {
        this.isLoggedInStudent = true;
      }
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.loginService.Logout();
    this.router.navigate(['/login']);
  }

public isAdmin() :boolean
{
return this.currentUserRole === "Admin";

}

public isStudent() :boolean
{
  return this.currentUserRole === "Student";

}

}
