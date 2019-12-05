import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule, MatGridListModule, MatIconModule, MatButtonModule , MatTableModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileModComponent } from './profile-mod/profile-mod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth-guard.service';


@NgModule({
  declarations: [ProfileComponent, ProfileModComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forChild(
    [{ path: '', component: ProfileComponent,canActivate: [AuthGuard] },
    { path: 'update', component: ProfileModComponent,canActivate: [AuthGuard] },
    { path: 'profile/:id', component: ProfileComponent },  
    ]

    )
  ]
})
export class ProfileModule { }
