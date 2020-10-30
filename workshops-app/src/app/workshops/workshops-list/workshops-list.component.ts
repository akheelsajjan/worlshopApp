import { Component, OnInit } from '@angular/core';
import * as Data from '../data/all-workshops.json';

@Component({
    selector: 'app-workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.css']
})
export class WorkshopsListComponent implements OnInit {
    showDescription = false;
    imageHeight = 100; /* in pixels */

    // workshops = (Data as any).default;
    workshops = Data['default'];

    constructor() {
        
    }

    ngOnInit(): void {
    }

    getButtonText() {
        return this.showDescription ? 'Hide descriptions' : 'Show descriptions'
    }

    toggleShowDescription() {
        this.showDescription = !this.showDescription;
    }
}
