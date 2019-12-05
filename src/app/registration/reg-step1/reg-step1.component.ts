import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

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

  step1Submitted(){
    this.regForm.get('personalDetails').get('firstname').markAsTouched();
    this.regForm.get('personalDetails').get('firstname').updateValueAndValidity();
    this.regForm.get('personalDetails').get('lastname').markAsTouched();
    this.regForm.get('personalDetails').get('lastname').updateValueAndValidity();
  }

}
