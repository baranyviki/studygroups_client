import { Injectable } from "@angular/core";
import { HttpBaseService } from '../services/http-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralSelectionItem } from '../models/shared/general-selection-item.model';
import { StudyBuddyListItem } from '../models/study-buddy/study-buddy-list-item.model';

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
        return this.http.get<GeneralSelectionItem[]>(this.createCompleteRouteWithMethodName('subject', 'selections'));
    }

    public getStudyBuddyList(subjectId: number): Observable<StudyBuddyListItem[]> {
        return this.http.get<StudyBuddyListItem[]>(this.createCompleteRoute(`student/${subjectId}`),this.generateHeaderWithContentTypeAndAuthorization());
    }
}