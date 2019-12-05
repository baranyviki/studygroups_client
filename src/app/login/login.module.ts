import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(
      [{ path: '', component: LoginComponent }]
    )
  ]
})
export class LoginModule { }
