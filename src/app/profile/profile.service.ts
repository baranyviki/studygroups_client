import { Injectable } from "@angular/core";
import { HttpBaseService } from '../services/http-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfileModel } from '../models/profile/userProfile.model';
import { GeneralSelectionItem } from '../models/shared/general-selection-item.model';
import { SubjectListModel } from '../models/profile/subject.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService extends HttpBaseService {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    public getStudentProfileDetails(): Observable<UserProfileModel> {
        return this.http.get<UserProfileModel>(this.createCompleteRoute(`student/details/`), this.generateHeaderWithContentTypeAndAuthorization());
    }

    public getStudentCompletedSubjects(): Observable<GeneralSelectionItem[]> {
        return this.http.get<GeneralSelectionItem[]>(this.createCompleteRoute(`subject/completed`), this.generateHeaderWithContentTypeAndAuthorization());
    }

    public updateStudent(userProfile: UserProfileModel) {
        return this.http.put(this.createCompleteRoute('student/update'), userProfile, this.generateHeaderWithContentTypeAndAuthorization());
    }

    public getStudentProfileById(id: string): Observable<UserProfileModel> {
        return this.http.get<UserProfileModel>(this.createCompleteRoute(`student/details/${id}`), this.generateHeaderWithContentTypeAndAuthorization());
    }
}