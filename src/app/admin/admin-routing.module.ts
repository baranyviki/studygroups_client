import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
    { path: '', component : DashboardComponent}   ,
    { path: 'dashboard', component : DashboardComponent}    
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ]
})

export class AdminRoutingModule { }
