import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    WrapperComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    SharedModule
  ]
})
export class WrapperModule { }
