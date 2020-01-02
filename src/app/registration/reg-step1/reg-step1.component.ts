import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-step1',
  templateUrl: './reg-step1.component.html',
  styleUrls: ['./reg-step1.component.scss']
})
export class RegStep1Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step1Submitted() {
  //   this.regForm.get('personaldetails').get('firstname').markAsTouched();
  //   this.regForm.get('personaldetails').get('firstname').updateValueAndValidity();
  //   this.regForm.get('personaldetails').get('lastname').markAsTouched();
  //   this.regForm.get('personaldetails').get('lastname').updateValueAndValidity();
  }

  // public hasError(controlName: string, errorName: string) {

  //   if (this.regForm.controls[controlName].hasError(errorName))
  //     return true;

  //   return false;
  // }


}
