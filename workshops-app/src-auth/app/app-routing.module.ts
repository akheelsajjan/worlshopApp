import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: AboutComponent, pathMatch: 'full' },
    { path: 'feedback', loadChildren: () => import( './feedback/feedback.module' ).then( m => m.FeedbackModule ) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
