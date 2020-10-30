import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-voting-widget',
    templateUrl: './voting-widget.component.html',
    styleUrls: ['./voting-widget.component.css']
})
export class VotingWidgetComponent implements OnInit {
    @Input()
    public votes;

    @Output()
    public upvoted : EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public downvoted : EventEmitter<number> = new EventEmitter<number>();;

    constructor() { }

    ngOnChanges( simpleChanges : SimpleChanges ) {
        console.log( 'new vote = ', simpleChanges );
    }

    ngOnInit() {
    }

    fireUpvoted() {
        this.upvoted.emit( this.votes + 1 )
    }

    fireDownvoted() {
        this.downvoted.emit( this.votes - 1 );
    }
}
