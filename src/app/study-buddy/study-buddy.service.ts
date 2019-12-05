import { Injectable } from "@angular/core";
import { HttpBaseService } from '../services/http-base.service';
import { HttpClient, HttpParams,HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralSelectionItem } from '../models/shared/general-selection-item.model';
import { StudyBuddyListItem } from '../models/study-buddy/study-buddy-list-item.model';
import { StudyGroupSearchModel } from '../models/study-buddy/study-group-search.model';
import { environment } from 'src/environments/environment';
import { UserProfileModel } from '../models/profile/userProfile.model';


@Injectable({
    providedIn: 'root'
})
export class StudyBuddyService extends HttpBaseService {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    public getSubjectSelections(): Observable<GeneralSelectionItem[]> {
        return this.http.get<GeneralSelectionItem[]>(this.createCompleteRouteWithMethodName('subject', 'selections'),this.generateHeaderWithContentTypeAndAuthorization());
    }

    public getCourseSelectionsForUserInCurrentSemester(): Observable<GeneralSelectionItem[]> {
        let userName = localStorage.getItem("username");
        return this.http.get<GeneralSelectionItem[]>(this.createCompleteRoute(`course/current-courses`),this.generateHeaderWithContentTypeAndAuthorization());
    }

    public getStudyBuddyList(subjectId: number): Observable<StudyBuddyListItem[]> {
        return this.http.get<StudyBuddyListItem[]>(this.createCompleteRoute(`student/group-search/${subjectId}`),this.generateHeaderWithContentTypeAndAuthorization());
    }
    
 

    public getStudyTeamSearchList(queryParams: StudyGroupSearchModel): Observable<StudyBuddyListItem[]> {
        //return this.http.get<StudyBuddyListItem[]>(this.createCompleteRoute(`student/group-search/${subjectId}`),this.generateHeaderWithContentTypeAndAuthorization());
        let params = new HttpParams();
        params = params.append('courseID',queryParams.courseId);
        params = params.append('isSameGradeAverage',queryParams.isSameGradeAverage );
        params = params.append('isSameCompletedSemesters',queryParams.isSameCompletedSemesters);
        params = params.append('isHavingOtherCourseInCommonCurrently',queryParams.isHavingOtherCourseInCommonCurrently);
        let headersX = new HttpHeaders({
            'Authorization': 'Bearer ' + this.getToken(),
            'Content-type': 'application/json'
          });
        let options = {headers:headersX,params:params };
        console.log('Params from http service:');
        console.log(params);
        return this.http.get<StudyBuddyListItem[]>(`${environment.apiUrl}/student/team-search`, options);
        
    }
    
}