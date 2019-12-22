import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseService } from '../services/http-base.service';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends HttpBaseService {
  private currentUserSubject: BehaviorSubject<string>;
  public currentUserRole: Observable<string>;

  constructor(
    private http: HttpClient, private jwtHelperService: JwtHelperService
  ) {
    super();
    let role = this.jwtHelperService.decodeToken(localStorage.getItem('jwt'));
    if (role) {
      console.log(role);
      this.currentUserSubject = new BehaviorSubject<string>(role);
    }
    else {
      this.currentUserSubject = new BehaviorSubject<string>('');
    }
    this.currentUserRole = this.currentUserSubject.asObservable();
  }

  public loginAUT(loginModel: string) {
    return this.http.post(this.createCompleteRouteWithMethodName('authentication', 'login'), loginModel, this.generateHeaderWithContentType())
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        let token = (<any>user).token;
        if (user && token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("jwt", token);
          if (token) {
            let decodedToken = this.jwtHelperService.decodeToken(token);
            console.log('Role after login: ' + decodedToken['Role'])
            this.currentUserSubject.next(decodedToken['Role']);
          }
        }
        return user;
      }));
  }

  public Logout() {
    localStorage.removeItem("jwt");
    this.currentUserSubject.next('');
  }

}
