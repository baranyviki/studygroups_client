import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { ErrorHandlerService } from './error-handler.service';
import { MatDialogModule,MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [ErrorModalComponent, SuccessModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    ErrorModalComponent,
    SuccessModalComponent],
  providers:[
    ErrorHandlerService
  ],
  entryComponents: [
    ErrorModalComponent,
    SuccessModalComponent
  ]
})
export class SharedModule { }
