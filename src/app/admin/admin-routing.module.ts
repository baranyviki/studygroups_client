import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModComponent } from './user-mod/user-mod.component';
import { SubjectModComponent } from './subject-mod/subject-mod.component';

const routes: Routes= [
    { path: '', component : DashboardComponent},
    { path: 'dashboard', component : DashboardComponent},
    { path: 'subject-list', component : SubjectListComponent},
    { path: 'user-list', component : UserListComponent},
    { path: 'user-mod/:id', component : UserModComponent},
    { path: 'subject/mod/:id', component : SubjectModComponent},
    { path: 'subject/create', component : SubjectModComponent},                    
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ]
})

export class AdminRoutingModule { }
