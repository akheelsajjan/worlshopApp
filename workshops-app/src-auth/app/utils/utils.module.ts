import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DurationPipe } from './duration.pipe';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
    declarations: [FilterComponent, DurationPipe],
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule
    ],
    exports: [
        FilterComponent,
        DurationPipe
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ]
})
export class UtilsModule { }
