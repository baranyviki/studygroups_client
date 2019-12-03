import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatDividerModule, MatListModule } from '@angular/material';

import { StudyBuddyRoutingModule } from './study-buddy-routing.module';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';
import { SharedModule } from '../shared/shared.module';
import { StudyTeamSearchComponent } from './study-team-search/study-team-search.component';

@NgModule({
  declarations: [StudyBuddyListComponent, StudyTeamSearchComponent],
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
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    StudyBuddyRoutingModule,
    SharedModule
  ]
})
export class StudyBuddyModule { }
