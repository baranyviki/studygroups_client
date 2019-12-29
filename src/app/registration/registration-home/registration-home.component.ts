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
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required)
    });

    let contactDetails = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'messengerName': new FormControl(null),
      'instagramName': new FormControl(null)
    });

    let accountDetails = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)] ),
      'image': new FormControl(null)
    });

    let neptunDetails = new FormGroup({
      'neptuncode': new FormControl(null),
      'gradebook': new FormControl(null,Validators.required),
      'courses': new FormControl(null,Validators.required)       
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
