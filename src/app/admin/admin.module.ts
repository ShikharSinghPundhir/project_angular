import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';

import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactdisplayComponent } from './contactdisplay/contactdisplay.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationdisplayComponent } from './registrationdisplay/registrationdisplay.component';



@NgModule({
  declarations: [
    CreateblogComponent,
    CreatecategoryComponent,
    DashboardComponent,
    DisplayComponent,
    EditblogComponent,
    SidebarComponent,
    ViewComponent,
    ContactdisplayComponent,
    CategorydisplayComponent,
    AboutusComponent,
    RegistrationComponent,
    RegistrationdisplayComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,
   
    
  ],
  exports:[
    DashboardComponent,
    EditblogComponent,
    CreateblogComponent,
    CreatecategoryComponent,
    DisplayComponent,
    SidebarComponent,
    ViewComponent,
    ContactdisplayComponent,
    CategorydisplayComponent,
    RegistrationComponent
  
  ]
})
export class AdminModule { }
