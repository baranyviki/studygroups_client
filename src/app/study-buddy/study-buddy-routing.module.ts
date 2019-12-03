import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';
import { StudyTeamSearchComponent } from './study-team-search/study-team-search.component';


const routes: Routes = [
  { path: 'list', component: StudyBuddyListComponent },
  { path: 'study-team-search', component: StudyTeamSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyBuddyRoutingModule { }
