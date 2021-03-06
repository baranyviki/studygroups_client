import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegStep1Component } from './reg-step1/reg-step1.component';
import { RegStep2Component } from './reg-step2/reg-step2.component';
import { RegStep3Component } from './reg-step3/reg-step3.component';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressBarModule
} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RegStep4Component } from './reg-step4/reg-step4.component';
import { RegStep5Component } from './reg-step5/reg-step5.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegStep1Component,
    RegStep2Component,
    RegStep3Component,
    RegistrationHomeComponent,
    FileUploadComponent,
    RegStep4Component,
    RegStep5Component],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressBarModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [{ path: '', component: RegistrationHomeComponent }]
    )
  ]
})
export class RegistrationModule { }
