import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './duration.pipe';
import { VotingWidgetComponent } from './voting-widget/voting-widget.component';

@NgModule({
    declarations: [FilterComponent, VotingWidgetComponent, DurationPipe],
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule
    ],
    exports: [
        FilterComponent,
        VotingWidgetComponent,
        DurationPipe
    ]
})
export class UtilsModule { }
