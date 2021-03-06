import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    LS_AUTH_KEY = 'token';
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse( localStorage.getItem( this.LS_AUTH_KEY ) );
        console.log( currentUser );

        if ( currentUser && currentUser.authToken ) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.authToken}`
                }
            });
        }
 
        return next.handle(request);
    }
}