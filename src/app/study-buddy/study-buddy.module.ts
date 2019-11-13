import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { StudyBuddyRoutingModule } from './study-buddy-routing.module';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StudyBuddyListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    StudyBuddyRoutingModule,
    SharedModule
  ]
})
export class StudyBuddyModule { }
