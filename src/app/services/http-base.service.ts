import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export abstract class HttpBaseService {
    createCompleteRoute(route: string): string {
        return `${environment.apiUrl}/${route}`;
    }

    createCompleteRouteWithMethodName(controller: string, method: string): string {
        return `${this.createCompleteRoute(controller)}/${method}`;
    }
}