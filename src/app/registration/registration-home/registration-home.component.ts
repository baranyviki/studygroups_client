import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-home',
  templateUrl: './registration-home.component.html',
  styleUrls: ['./registration-home.component.scss']
})
export class RegistrationHomeComponent implements OnInit {

  constructor() { }

  registrationForm: FormGroup

  ngOnInit() {
    let personalDetails = new FormGroup({
      'firstname': new FormControl(null), //, Validators.required),
      'lastname': new FormControl(null), //, Validators.required),
      'birthday': new FormControl(null),
      'gender': new FormControl(null)
    });

    let contactDetails = new FormGroup({
      'email': new FormControl(null), //, [Validators.required, Validators.email]
      'messengerName': new FormControl(null),
      'instagramName': new FormControl(null)
    });

    let accountDetails = new FormGroup({
      'username': new FormControl(null), //, [Validators.required]),
      'password': new FormControl(null), //, [Validators.required, Validators.minLength(6)]),
      'image': new FormControl(null)
    });

    let neptunDetails = new FormGroup({
      'neptuncode': new FormControl(null),
      'gradebook': new FormControl(null),
      'courses': new FormControl(null)       
    });

    this.registrationForm = new FormGroup(
      {
        personalDetails,
        contactDetails,
        accountDetails,
        neptunDetails
      }
    );


  }



}
