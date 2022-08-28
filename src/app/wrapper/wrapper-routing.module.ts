import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { WrapperComponent } from './wrapper.component';

const routes: Routes = [
  {
     path: '', 
     component: WrapperComponent,
     children:[
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule { }
