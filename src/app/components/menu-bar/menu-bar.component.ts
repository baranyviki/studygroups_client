import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  isLoggedInStudent :boolean = false;
  isLoggedInAdmin :boolean = false;
  constructor(private router :Router) { }

  ngOnInit() {
    let token=localStorage.getItem("jwt");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout() {
     localStorage.removeItem("jwt");
     this.router.navigate(['/login']);
  }
}
