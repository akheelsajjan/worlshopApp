import { Component, OnInit } from '@angular/core';
import { AuthService } from '../utils/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    progress = false;

    constructor( private _as : AuthService, private _sb: MatSnackBar ) { }

    ngOnInit(): void {
    }

    login( form ) {
        console.log( form.value );
        this._as.login( form.value.username, form.value.password  )
            .subscribe( () => this._sb.open( 'SUCCESS', 'Logged in' ) );
    }
}
