import { Component } from '@angular/core';

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
        { name: 'List of Workshops', link: '/workshops' }
    ]
}