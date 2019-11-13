import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { HttpEventType } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistrationModel } from 'src/app/models/registration/registration.model';

@Component({
  selector: 'app-reg-step4',
  templateUrl: './reg-step4.component.html',
  styleUrls: ['./reg-step4.component.scss']
})
export class RegStep4Component implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;
  private router: Router;
  ngOnInit() {
  }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;
    //todo submit to API

    if (this.regForm.invalid) {
      return;
    }

    let formdata = new FormData();
    formdata.append('firstname', this.regForm.value.personalDetails.firstname);
    formdata.append('lastname', this.regForm.value.personalDetails.lastname);
    formdata.append('birthday', this.regForm.value.personalDetails.birthday);
    formdata.append('gender', this.regForm.value.personalDetails.gender);
    formdata.append('email', this.regForm.value.contactDetails.email);
    formdata.append('messengername', this.regForm.value.contactDetails.messengerName);
    formdata.append('instagramname', this.regForm.value.contactDetails.instagramName);
    formdata.append('username', this.regForm.value.accountDetails.username);
    formdata.append('password', this.regForm.value.accountDetails.password);
    formdata.append('image', this.regForm.value.accountDetails.image);

    console.log(formdata);

    // console.log(formdata.get('firstname'));
    // console.log(formdata.get('lastname'));
    // console.log(formdata.get('birthday'));
    // console.log(formdata.get('gender'));
    // console.log(formdata.get('email'));
    // console.log(formdata.get('messengername'));
    // console.log(formdata.get('instagramname'));
    // console.log(formdata.get('username'));
    // console.log(formdata.get('password'));
    // console.log(formdata.get('image'));


    this.registrationService.registrateUser(formdata).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
        });

    //go to login page if ready

  }
  submit2() {
    // this.http.post('http://...', toFormData(this.signup.value), {
    //   reportProgress: true,
    //   observe: 'events'
    // }))

    // this.registrationService.uploadFile(this.regForm.value).subscribe(event => {    
    //   if ( event.type === HttpEventType.UploadProgress ) {
    //     this.progress = Math.round((100 * event.loaded) / event.total);
    //   }

    //   if ( event.type === HttpEventType.Response ) {
    //     console.log(event.body);
    //     this.signup.reset();
    //   }

    // });
  }

}
