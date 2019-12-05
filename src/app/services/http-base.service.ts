import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export abstract class HttpBaseService {

    generateHeaderWithContentType = () => {
        return {
          headers: new HttpHeaders({ 'Content-type': 'application/json' })
        };
      }
    
      generateHeaderWithAuthorization() {
        return {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.getToken()
          })
        };
      }
    
      generateHeaderWithContentTypeAndAuthorization() {
        return {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.getToken(),
            'Content-type': 'application/json'
          })
        };
      }
    
      generateHeaderForFileUpload() {
        return {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.getToken()
          })
        };
      }
    
      getToken() {
        return localStorage.getItem('jwt');
      }

    createCompleteRoute(route: string): string {
        return `${environment.apiUrl}/${route}`;
    }

    createCompleteRouteWithMethodName(controller: string, method: string): string {
        return `${this.createCompleteRoute(controller)}/${method}`;
    }



}