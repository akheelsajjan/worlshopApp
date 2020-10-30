import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { AppComponent } from './app-root/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

@NgModule(
    {
        // components, directives, pipes
        declarations: [
            AppComponent,
            NavbarComponent,
            AboutComponent,
            LoginComponent
        ],
        // imported modules
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            FormsModule,
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
