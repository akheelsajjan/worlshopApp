import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { AppComponent } from './app-root/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

@NgModule(
    {
        // components, directives, pipes
        declarations: [
            AppComponent,
            NavbarComponent,
            AboutComponent
        ],
        // imported modules
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            AngularMaterialModule,
            WorkshopsModule
        ],
        // services
        providers: [],
        bootstrap: [
            AppComponent
        ]
    }
)
export class AppModule { }
