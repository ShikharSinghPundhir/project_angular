import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
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
    path : 'admin-editblog',
    component : EditblogComponent
  },
  {
    path :'admin-displaycategory',
    component : DisplaycategoryComponent
  },
  {
    path:'admin-view/:id',
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
