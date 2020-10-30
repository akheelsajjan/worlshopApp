import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsRootComponent } from './workshops-root/workshops-root.component';
import { WorkshopsListComponent } from './workshops-list/workshops-list.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { AddSessionComponent } from './add-session/add-session.component';

const routes : Routes = [
    {
        path: 'workshops', component: WorkshopsRootComponent,
        children: [
            { path: '', component: WorkshopsListComponent },
            { 
                path: ':id', component: WorkshopDetailsComponent,
                children: [
                    { path: '', component: SessionsListComponent },
                    { path: 'add', component: AddSessionComponent },
                ]
            }
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