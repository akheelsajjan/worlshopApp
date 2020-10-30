import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Data from '../data/all-workshops.json';

@Component({
    selector: 'app-workshop-details',
    templateUrl: './workshop-details.component.html',
    styleUrls: ['./workshop-details.component.css']
})
export class WorkshopDetailsComponent implements OnInit {
    public workshopId;
    public workshop;

    // EXERCISE: Please display anywhere (say as a USD amount with 2 decimal digits - https://angular.io/api?query=pipe)
    public price = 123.567;

    public dateFormat = 'd MMM yyyy';

    constructor( private _activatedRoute : ActivatedRoute, private _router : Router ) {
    }

    ngOnInit(): void {
        this.workshopId = +this._activatedRoute.snapshot.paramMap.get( 'id' );
        console.log( this._activatedRoute.snapshot );

        // set up wokshop object
        this.workshop = Data['default'][ this.workshopId - 1 ];
    }

    changedTabs( $event ) {
        console.log( 'tab was changed ', $event );
        switch( $event ) {
            case 0:
                this._router.navigate( [ '' ] );
                break;
            case 1:
                this._router.navigate( [ '.', 'add' ] );
                break;
        }
    }
}
