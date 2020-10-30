import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { WorkshopsListComponent } from './workshops-list/workshops-list.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { SessionsService } from './sessions.service';
import { HttpClientModule } from '@angular/common/http';
import { WorkshopsRootComponent } from './workshops-root/workshops-root.component'

@NgModule({
    declarations: [WorkshopsListComponent, WorkshopDetailsComponent, SessionsListComponent, AddSessionComponent, WorkshopsRootComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        UtilsModule,
        WorkshopsRoutingModule
    ],
    // providers: [ // adds a service instnce to the workshops module's injector
    //     SessionsService
    // ],
    exports: [
        WorkshopsListComponent
    ]
})
export class WorkshopsModule { }
