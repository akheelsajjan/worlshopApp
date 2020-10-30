import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    padWithZero( val : string | number, length = 2 ) {
        let str = '' + val;
        return Array( Math.max( length - str.length, 0 ) ).fill('0').join('') + str;
    }
    
    transform( timeDurationInHours: number, format: string = 'standard' ): string {
        if( format === 'hh:mm:ss' ) {
            let temp;
            let hh = Math.floor( timeDurationInHours );
            
            temp = ( timeDurationInHours - hh ) * 60;
            let mm = Math.floor( temp );
    
            temp = ( temp - mm ) * 60;
            let ss = Math.floor( temp );
    
            return `${this.padWithZero( hh )}:${this.padWithZero( mm )}:${this.padWithZero( ss )}`;
        } else {
            if( timeDurationInHours < 1 ) {
                return `${Math.round( timeDurationInHours * 60 )} minutes`;
            } else if( timeDurationInHours === 1 ) {
                return `${timeDurationInHours} hour`;
            } else {
                return `${timeDurationInHours} hours`;
            }   
        }
    }
}
