import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reg-step5',
  templateUrl: './reg-step5.component.html',
  styleUrls: ['./reg-step5.component.scss']
})
export class RegStep5Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step5Submitted()
  {


  }

}
