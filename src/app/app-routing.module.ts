
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'study-buddy', loadChildren: () => import('./study-buddy/study-buddy.module').then(mod => mod.StudyBuddyModule) },
    {path: 'registration', loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule)}

]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }