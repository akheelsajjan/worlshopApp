import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';

@NgModule({
    declarations: [FeedbackComponent],
    imports: [
        CommonModule,
        FeedbackRoutingModule
    ]
})
export class FeedbackModule { }
