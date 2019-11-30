import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
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
    RouterModule.forChild(
      [{ path: '', component: LoginComponent }]
    )
  ]
})
export class LoginModule { }
