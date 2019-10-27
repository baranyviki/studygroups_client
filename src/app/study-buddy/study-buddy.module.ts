import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudyBuddyRoutingModule } from './study-buddy-routing.module';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    ReactiveFormsModule,
    StudyBuddyRoutingModule
  ]
})
export class StudyBuddyModule { }
