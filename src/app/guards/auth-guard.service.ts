import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterLink, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtHelper: JwtHelperService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      //console.log(this.jwtHelper.decodeToken(token));
      if (route.data) {
        let routeRole = route.data['roleAut'];
        console.log('activated route data: ' + routeRole );
        let decodedToken = this.jwtHelper.decodeToken(token);
        if( routeRole ==='Admin' && routeRole === decodedToken['Role'])
        {
            return true;
        }
        if(routeRole==='Student' && routeRole === decodedToken['Role'])
        {
            return true;
        }
        
      }      
    }
    this.router.navigate(["login"]);
    return false;
  }

  canActivateAdmin() {
    let token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      let decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken['Role'] == 'Admin') {
        return true;
      }
    }
    this.router.navigate(["login"]);
    return false;
  }

  canActivateStudent() {
    let token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      let decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken['Role'] == 'Student') {
        return true;
      }
    }
    this.router.navigate(["login"]);
    return false;
  }

}
