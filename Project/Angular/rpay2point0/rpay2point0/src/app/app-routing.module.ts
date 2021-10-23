import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import { AirtelplanComponent } from './plans/airtelplan/airtelplan.component';
import { BsnlplanComponent } from './plans/bsnlplan/bsnlplan.component';
import { VodaideaplanComponent } from './plans/vodaideaplan/vodaideaplan.component';
import { JioplanComponent } from './plans/jioplan/jioplan.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'plans',component:PlansComponent,children:[
  
  ]},
  {path:'plans',component:PlansComponent},
  {path:'home',component:HomeComponent},
  {path:'airtelplan',component:AirtelplanComponent},
  {path:'jioplan',component:JioplanComponent},
  {path:'bsnlplan',component:BsnlplanComponent},
  {path:'vodaideaplan',component:VodaideaplanComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
