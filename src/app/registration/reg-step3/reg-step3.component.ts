import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-step3',
  templateUrl: './reg-step3.component.html',
  styleUrls: ['./reg-step3.component.scss']
})
export class RegStep3Component implements OnInit {

  @Input() regForm: FormGroup;
  progress;

  constructor() { }

  ngOnInit() {
    this.progress=80;
  }

step3Submitted(){

}

}