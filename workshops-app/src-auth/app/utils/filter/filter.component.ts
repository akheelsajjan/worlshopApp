import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges {
    @Input( /* custom name for attribute */ )
    items: Array<Object>;

    @Input()
    filterBy : Array<string>;

    @Output()
    filter: EventEmitter<Array<Object>> = new EventEmitter<Array<Object>>();

    filteredItems : Array<Object>;

    searchTerms: string = '';
    
    constructor() { }

    // called both initially and on changes
    ngOnChanges( simpleChanges: SimpleChanges ) {
        console.log( simpleChanges );

        this.filterItems();
    }

    // initailly
    ngOnInit(): void {
    }

    filterItems() {
        if( this.items instanceof Array ) {
            this.filteredItems = this.items.filter(
                item => this.filterBy.some(
                    filterProperty => item[filterProperty].toUpperCase().includes( this.searchTerms.toUpperCase() )
                )
            );

            console.log( '------' );
            console.log( this.filteredItems, this.filterBy );

            this.filter.emit( this.filteredItems );
        }
    }
}
