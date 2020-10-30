import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // we are adding an instance of this service to the app module's injector
})
export class SessionsService {

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

    getSessionsForWorkshop( workshopId ) {
        return this._http.get( `http://workshops-server.herokuapp.com/workshops/${workshopId}/sessions` ).pipe(
            retry( 3 ),
            catchError( this.handleError )
        );
    }

    addSession( workshopId, session ) {
        const updatedSession = {
            ...session,
            workshopId,
            upvoteCount: 0
        };

        console.log( 'about to make post request' );
        
        return this._http.post( 
            `http://workshops-server.herokuapp.com/sessions`,
            updatedSession,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        ).pipe(
            retry( 3 ),
            catchError( this.handleError )
        );
    };

    upvote( session ) {
        return this._http.put( `http://workshops-server.herokuapp.com/sessions/${session.id}/upvote`, '' ).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }
    
    downvote( session ) {
        return this._http.put( `http://workshops-server.herokuapp.com/sessions/${session.id}/downvote`, '' ).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }
}