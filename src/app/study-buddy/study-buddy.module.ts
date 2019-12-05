import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatDividerModule, MatListModule, MatIconModule } from '@angular/material';
import { StudyBuddyRoutingModule } from './study-buddy-routing.module';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';
import { SharedModule } from '../shared/shared.module';
import { StudyTeamSearchComponent } from './study-team-search/study-team-search.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TutorSearchComponent } from './tutor-search/tutor-search.component';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [StudyBuddyListComponent, StudyTeamSearchComponent, StudentProfileComponent, TutorSearchComponent],
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
    MatIconModule,
    ReactiveFormsModule,
    StudyBuddyRoutingModule,    
    ProfileModule,
    SharedModule
  ]
})
export class StudyBuddyModule { }
