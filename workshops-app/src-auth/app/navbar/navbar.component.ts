import { Component } from '@angular/core';
import { AuthService } from '../utils/auth.service';

@Component(
    {
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: [
            './navbar.component.css'
        ]
    }
)
export class NavbarComponent {
    links = [
        { name: 'Workshops App', link: '/' },
        { name: 'List of Workshops', link: '/workshops' },
        { name: 'Feedback', link: '/feedback' },
        { name: 'Login', link: '/login' }
    ];

    constructor( private _as : AuthService ) {}

    isLoggedIn() {
        return this._as.isLoggedIn();
    }

    logout() {
        this._as.logout();
    }
}