import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { MatDialog } from '@angular/material';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  public errorMessage: string = '';
  public dialogConfig= {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: { }
  };

  constructor(private router: Router, private dialog: MatDialog) { }
 
  public handleError(error: HttpErrorResponse){
    if(error.status === 500){
      this.handle500Error(error);
    }
    else if(error.status === 404){
      this.handle404Error(error)
    }
    else if(error.status === 401){
      this.handle401Error(error);      
    }
    else{
      this.handleOtherError(error);
    }
  }
 
  private handle500Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }
 
  private handle404Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }
 
  private handle401Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/login']);
  }
  private handleOtherError(error: HttpErrorResponse){
    this.createErrorMessage(error);
    console.log(this.dialogConfig);
    this.dialogConfig.data = { 'errorMessage': this.errorMessage };
    this.dialog.open(ErrorModalComponent, this.dialogConfig);
  }
 
  private createErrorMessage(error: HttpErrorResponse){
    this.errorMessage = error.error ? error.error.Message : error.error;
    // console.log(`${JSON.stringify(error)}`);
     console.log(error.error.Message);
     console.log(this.errorMessage);
    // console.log(error.statusText);
  }


}
