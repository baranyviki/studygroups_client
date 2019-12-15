import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserListItem } from '../models/admin/user-list-item-model';
import { HttpBaseService } from '../services/http-base.service';
import { Observable } from 'rxjs';
import { SubjectModListItem } from '../models/admin/subject-mod-list-item.model';
import { UserPatchDTO } from '../models/admin/user-patch-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends HttpBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public getUserManageList(): Observable<UserListItem[]> {
    return this.http.get<UserListItem[]>(this.createCompleteRoute(`users`), this.generateHeaderWithContentTypeAndAuthorization());
  }
  public getUser(id: string): Observable<UserListItem> {
    return this.http.get<UserListItem>(this.createCompleteRoute(`users/${id}`), this.generateHeaderWithContentTypeAndAuthorization());
  }
  public getAllSubject(): Observable<SubjectModListItem[]> {
    return this.http.get<SubjectModListItem[]>(this.createCompleteRoute(`subject`), this.generateHeaderWithContentTypeAndAuthorization());
  }
  public patchUser(userPatchDto: UserPatchDTO) {
    return this.http.patch<UserPatchDTO>(this.createCompleteRoute(`users/${userPatchDto.id}`), userPatchDto, this.generateHeaderWithContentTypeAndAuthorization());
  }

  public deleteUser() {

  }
}
