import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserListItem } from '../models/admin/user-list-item-model';
import { HttpBaseService } from '../services/http-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends HttpBaseService {

  constructor(private http: HttpClient) 
  {
    super();
  }

  public getUserManageList(): Observable<UserListItem[]> {
    return this.http.get<UserListItem[]>(this.createCompleteRoute(`admin/user`),this.generateHeaderWithContentTypeAndAuthorization());
}
public getUser( id:string): Observable<UserListItem> {
  return this.http.get<UserListItem>(this.createCompleteRoute(`admin/user/${id}`),this.generateHeaderWithContentTypeAndAuthorization());
}
}
