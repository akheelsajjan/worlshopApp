import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsListComponent } from './workshops-list/workshops-list.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { AuthGuard } from '../utils/auth.guard';

const routes : Routes = [
    { path: 'workshops', component: WorkshopsListComponent, canActivate: [ AuthGuard ] },
    { 
        path: 'workshops/:id', component: WorkshopDetailsComponent, canActivate: [ AuthGuard ],
        children: [
            { path: '', component: SessionsListComponent },
            { path: 'add', component: AddSessionComponent },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class WorkshopsRoutingModule { }