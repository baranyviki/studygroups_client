
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
    { path: 'study-buddy', loadChildren: () => import('./study-buddy/study-buddy.module').then(mod => mod.StudyBuddyModule),canActivate: [AuthGuard]},  
    { path: 'registration', loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) }

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