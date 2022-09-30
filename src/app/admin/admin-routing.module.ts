import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { EditblogComponent } from './editblog/editblog.component';

const routes: Routes = [
  {
    path: 'admin-createblogComponent',
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
    path : 'amin-editblog',
    component : EditblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
