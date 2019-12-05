import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';
import { StudyTeamSearchComponent } from './study-team-search/study-team-search.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TutorSearchComponent } from './tutor-search/tutor-search.component';


const routes: Routes = [
  { path: '', component: StudyBuddyListComponent },
  { path: 'list', component: StudyBuddyListComponent },
  { path: 'study-team-search', component: StudyTeamSearchComponent },
  { path: 'tutor-search', component: TutorSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyBuddyRoutingModule { }
