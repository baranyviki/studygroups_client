import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-step2',
  templateUrl: './reg-step2.component.html',
  styleUrls: ['./reg-step2.component.scss']
})
export class RegStep2Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step2Submitted() {
    this.regForm.get('contactDetails').get('email').markAsTouched();
    this.regForm.get('contactDetails').get('email').updateValueAndValidity();
  }
  
  public hasError(controlName: string, errorName: string) {
    if (this.regForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

}
