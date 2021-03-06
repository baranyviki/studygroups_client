import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth-guard.service';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { InternalServerComponent } from './components/error-pages/internal-server/internal-server.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '',  loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)},
    { path: 'study-buddy', loadChildren: () => import('./study-buddy/study-buddy.module').then(mod => mod.StudyBuddyModule),canActivate: [AuthGuard], data : {roleAut : 'Student'}},  
    { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) },
    { path: 'registration', loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule) },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule) ,canActivate: [AuthGuard], data : {roleAut : 'Student'}},
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),canActivate: [AuthGuard], data : {roleAut : 'Admin'}},
    { path: 'home', component : HomeComponent},
    { path: '404', component : NotFoundComponent},
    { path: '500', component: InternalServerComponent},
    { path: '**', redirectTo: '/404', pathMatch: 'full'}
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