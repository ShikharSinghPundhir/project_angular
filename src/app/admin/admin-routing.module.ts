import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { ContactdisplayComponent } from './contactdisplay/contactdisplay.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { EditblogComponent } from './editblog/editblog.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationdisplayComponent } from './registrationdisplay/registrationdisplay.component';

import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'admin-createblog',
    component: CreateblogComponent
  },
  {
    path : 'admin-createcategory',
    component : CreatecategoryComponent
  },
  {
    path : 'admin-dashboard',
    component : DashboardComponent
  },
  {
    path: 'admin-display',
    component : DisplayComponent
  },
  {
    path : 'admin-editblog/:id',
    component : EditblogComponent
  },
  {
    path :'admin-categorydisplay',
    component : CategorydisplayComponent
  },
  {
    path:'admin-view/:id',
    component:ViewComponent
  },
  {
    path:'admin-contactdisplay',
    component:ContactdisplayComponent
  },
  {
    path:'admin-registration',
    component:RegistrationComponent
  },
  {
    path:'admin-registrationdisplay',
    component:RegistrationdisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
