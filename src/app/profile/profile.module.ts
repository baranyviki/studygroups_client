import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule, MatGridListModule, MatIconModule, MatButtonModule , MatTableModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild(
      [{ path: '', component: ProfileComponent }]
    )
  ]
})
export class ProfileModule { }
