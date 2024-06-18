import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Assignment/homepage/homepage.component';
import { DashboardComponent } from './Assignment/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path:'dashboard',component:DashboardComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
