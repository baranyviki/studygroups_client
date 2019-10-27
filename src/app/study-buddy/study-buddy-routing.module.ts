import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyBuddyListComponent } from './study-buddy-list/study-buddy-list.component';


const routes: Routes = [
  { path: 'list', component: StudyBuddyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyBuddyRoutingModule { }
