import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreInfoRoutingModule } from './more-info-routing.module';
import { MoreInfoComponent } from './more-info.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    MoreInfoComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MoreInfoRoutingModule,
    SharedModule
  ]
})
export class MoreInfoModule { }
