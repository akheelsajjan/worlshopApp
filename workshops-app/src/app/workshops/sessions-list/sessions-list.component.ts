import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionsService } from '../sessions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilterComponent } from '../../utils/filter/filter.component';

@Component({
    selector: 'app-sessions-list',
    templateUrl: './sessions-list.component.html',
    styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit, OnDestroy {
    sessions : any = [];
    filteredSessions : any = [];
    filterBy = [ 'name', 'abstract' ];
    workshopId: number;
    sessionSubscription : Subscription;
    
    // holds the user search string
    searchTerms = '';
    sbOptions = {
        duration: 3000
    };

    @ViewChild(FilterComponent)
    private _appFilter: FilterComponent;

    constructor( private _ar : ActivatedRoute, private _ss : SessionsService, private _sb : MatSnackBar ) {
        this._ar.params.subscribe(
            ( params ) => {
                this.workshopId = params.id;
                this.sessionSubscription = this._ss.getSessionsForWorkshop( this.workshopId ).subscribe({
                    next: ( sessions ) => {
                        this.sessions = sessions;
                        this.filteredSessions = this.sessions;
                        this._sb.open( 'Sessions have been loaded', '', this.sbOptions );
                    },
                    error : ( err ) => {
                        this._sb.open( err.message, '', this.sbOptions );
                    }
                });
            }
        );
    }

    ngOnInit(): void {
        // setTimeout(() => {
        //     this.sessions = [
        //         ...this.sessions.slice( 0, this.sessions.length - 1 )
        //     ];
        // }, 5000);
    }

    getBadgeClass( session ) {
        return {
            'badge-success' : session.level === 'Basic',
            'badge-primary' : session.level === 'Intermediate',
            'badge-warning' : session.level === 'Advanced'
        };
    }

    filterSessions() {
        this.filteredSessions = this.sessions.filter(( session ) => {
            return session.abstract.toUpperCase().includes( this.searchTerms.toUpperCase() ) || session.name.toUpperCase().includes( this.searchTerms.toUpperCase() );
        });
    }

    upvote( session, index, ev ) {
        console.log( 'ev = ', ev );
        this._ss.upvote( session ).subscribe(
            ( sessionNew ) => {
                this.sessions.splice( index, 1, sessionNew );
                this.filteredSessions.find( session => (<any>sessionNew).id === session.id ).upvoteCount = (<any>sessionNew).upvoteCount;
                this._sb.open( 'Your vote has been registered', '', this.sbOptions );
            }
        );
    }

    downvote( session, index, ev ) {
        console.log( 'ev = ', ev );
        this._ss.downvote( session ).subscribe(
            ( sessionNew ) => {
                this.sessions.splice( index, 1, sessionNew );
                this.filteredSessions.find( session => (<any>sessionNew).id === session.id ).upvoteCount = (<any>sessionNew).upvoteCount;
                this._sb.open( 'Your vote has been registered', '', this.sbOptions );
            }
        );
    }

    ngOnDestroy() {
        this.sessionSubscription.unsubscribe();
    }

    foo() {
        this._appFilter.foo();
    }
}
