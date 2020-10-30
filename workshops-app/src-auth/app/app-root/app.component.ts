import { Component } from '@angular/core';

@Component(
    {
        // custom HTML element (component) name
        selector: 'app-root',
        // HTML template for the component
        templateUrl: './app.component.html',
        // CSS files for the component
        styleUrls: ['./app.component.css']
    }
)
export class AppComponent {
    title = 'Workshops Application';
}
