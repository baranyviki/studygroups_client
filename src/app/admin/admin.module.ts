import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';
import {  MatCardModule } from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';
import { SubjectModComponent } from './subject-mod/subject-mod.component';

@NgModule({
  declarations: [DashboardComponent, SubjectListComponent, SubjectCreateComponent, SubjectModComponent],
  imports: [
    CommonModule,
    ChartsModule,
    MatCardModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
