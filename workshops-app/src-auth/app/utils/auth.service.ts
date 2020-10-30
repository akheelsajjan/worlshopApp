import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    LS_AUTH_KEY = 'token';

    constructor( private _http: HttpClient, private _router : Router ) { }

    isLoggedIn() {
        return localStorage.getItem( this.LS_AUTH_KEY ) !== null;
    }

    logout() {
        localStorage.removeItem( this.LS_AUTH_KEY );
        this._router.navigate( [ 'login' ] )
    }

    login( email, password ) {
        return this._http.post(
            `${environment.apiBaseUrl}/login`,
            {
                email, password
            }
        ).pipe(
            map( resp => {
                // login successful if there's a jwt token in the response
                if (resp && (<any>resp).authToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem( this.LS_AUTH_KEY, JSON.stringify( resp ) );
                }

                return resp;
            })
        );
    }
}
