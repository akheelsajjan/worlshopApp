import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import IWorkshop from './IWorkshop';

@Injectable({
  providedIn: 'root' // we are adding an instance of this service to the app module's injector
})
export class WorkshopsService {

    constructor( private _http : HttpClient ) { }

    private handleError( error: HttpErrorResponse ) {
        if ( error.error instanceof ErrorEvent ) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            console.log( JSON.stringify( error ) );
            console.log( 'end of handleError' );
        }
        
        // return an observable with a user-facing error message
        return throwError(
            new Error( 'Something bad happened; please try again later.' )
        );
    };

    getWorkshops() {
        return this._http.get<IWorkshop[]>( `${environment.apiBaseUrl}/workshops` ).pipe(
            retry( 3 ),
            catchError( this.handleError )
        );
    }
    
    getWorkshopById( workshopId ) {
        return this._http.get( `${environment.apiBaseUrl}/workshops/${workshopId}` ).pipe(
            retry( 3 ),
            catchError( this.handleError )
        );
    }
}