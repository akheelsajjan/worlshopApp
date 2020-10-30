import { Component, OnInit } from '@angular/core';
// import * as Data from '../data/all-workshops.json';
import { WorkshopsService } from '../workshops.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import IWorkshop from '../IWorkshop';

@Component({
    selector: 'app-workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.css']
})
export class WorkshopsListComponent implements OnInit {
    showDescription = false;
    imageHeight = 100; /* in pixels */

    workshops: IWorkshop[];
    // workshops = (Data as any).default;
    // workshops = Data['default'];

    sbOptions = {
        duration: 3000
    };

    constructor(  private _ws : WorkshopsService, private _sb : MatSnackBar ) { }

    ngOnInit(): void {
        this._ws.getWorkshops().subscribe({
            next: ( workshops ) => {
                this.workshops = workshops;
                this._sb.open( 'Workshops have been loaded', '', this.sbOptions );
            },
            error : ( err ) => {
                this._sb.open( err.message, '', this.sbOptions );
            }
        });
    }

    getButtonText() {
        return this.showDescription ? 'Hide descriptions' : 'Show descriptions'
    }

    toggleShowDescription() {
        this.showDescription = !this.showDescription;
    }
}
