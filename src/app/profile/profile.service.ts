import { Injectable } from "@angular/core";
import { HttpBaseService } from '../services/http-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfileModel } from '../models/profile/userProfile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService extends HttpBaseService {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    public getStudentProfileDetails(studentUserName:string): Observable<UserProfileModel> {
        return this.http.get<UserProfileModel>(this.createCompleteRoute(`student/details/${studentUserName}`),this.generateHeaderWithContentTypeAndAuthorization());
    }

}