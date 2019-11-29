import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseService } from '../services/http-base.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends HttpBaseService {
 
  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public loginAUT(loginModel :string) {
    return this.http.post(this.createCompleteRouteWithMethodName('authentication', 'login'), loginModel, this.generateHeaderWithContentType())
  }


}
