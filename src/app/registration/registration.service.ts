import { Injectable } from "@angular/core";
import { HttpBaseService } from '../services/http-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralSelectionItem } from '../models/shared/general-selection-item.model';
import {RegistrationModel} from '../models/registration/registration.model';
@Injectable({
    providedIn: 'root'
})
export class RegistrationService extends HttpBaseService {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    public uploadFile(object) {
        return this.http.post(this.createCompleteRouteWithMethodName('registration','imageUpload'),object)
    }

    public registrateUser(regModel: FormData)
    {
        return this.http.post(this.createCompleteRouteWithMethodName('authentication','registration'),regModel);
    }
}