import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SessionsService } from '../sessions.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-session',
    templateUrl: './add-session.component.html',
    styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
    addSessionForm : FormGroup;
    workshopId : number;

    private sbOptions = {
        duration: 3000
    };

    // accessor property - defined using getter + setter -> used like normal property but defined using functions. When we use sequenceId as a variable, its value is the one returned by the getter function   
    get sequenceId() {
        return this.addSessionForm.get( 'sequenceId' );
    }
    
    get abstract() {
        return this.addSessionForm.get( 'abstract' );
    }

    constructor( private _fb : FormBuilder, private _ss : SessionsService, private _ar : ActivatedRoute, private _sb : MatSnackBar ) {
        this.addSessionForm = this._fb.group({
            sequenceId: this._fb.control( '', [ Validators.required/*, Validators.pattern( '^\d+$' ) */] ),
            name: this._fb.control( '', Validators.required ),
            speaker: this._fb.control( '', [ Validators.required, Validators.pattern( '[A-Za-z ]' ) ] ),
            abstract: this._fb.control( '', [ Validators.required, Validators.minLength( 10 ) ] )
        });
    }

    ngOnInit(): void {
        this.workshopId = +this._ar.snapshot.paramMap.get( 'id' );
    }

    addSession( $event, form ) {
        $event.preventDefault();

        console.log( $event, form.value );

        this._ss.addSession( this.workshopId, form.value )
            .subscribe(
                ( updatedSession : any ) => this._sb.open( `Session added with id = ${updatedSession.id}`, '', { duration: 3000 } )
                /* error handling skipped */
            )
    }
}
