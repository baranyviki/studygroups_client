
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
    { path: '',  loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)},
    { path: 'study-buddy', loadChildren: () => import('./study-buddy/study-buddy.module').then(mod => mod.StudyBuddyModule),canActivate: [AuthGuard]},  
    { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) },
    { path: 'registration', loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule) },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) ,canActivate: [AuthGuard]}
   
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