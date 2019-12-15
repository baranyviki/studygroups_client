import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';
import {  MatCardModule, MatPaginatorModule, MatTableModule, MatSortModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatDialogModule, MatChipsModule } from '@angular/material';
import { AdminRoutingModule } from './admin-routing.module';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';
import { SubjectModComponent } from './subject-mod/subject-mod.component';
import { UserListComponent } from './user-list/user-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserModComponent } from './user-mod/user-mod.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, SubjectListComponent, SubjectCreateComponent, SubjectModComponent, UserListComponent, UserModComponent],
  imports: [
    CommonModule,
    ChartsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
