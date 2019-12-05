import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from 'src/app/models/profile/userProfile.model';
import { ProfileService } from '../profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Location } from '@angular/common';
import { SubjectModel } from 'src/app/models/profile/subject.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile-mod',
  templateUrl: './profile-mod.component.html',
  styleUrls: ['./profile-mod.component.scss']
})
export class ProfileModComponent implements OnInit {

  profile = {} as UserProfileModel;
  public profileForm: FormGroup;
  public subjects: SubjectModel[];
  public current_options: SubjectModel[];


  constructor(private _snackBar: MatSnackBar,private profileService: ProfileService, private errorHandler: ErrorHandlerService, private location: Location) { }

  ngOnInit() {
    this.initMultiSelectParams();
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      messengerName: new FormControl(''),
      instagramName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.maxLength(254), Validators.email]),
      neptunCode: new FormControl('', [Validators.maxLength(6)]),
      tutoringSubjects: new FormControl('')
    });

    this.profileService.getStudentProfileDetails().subscribe(result => {
      this.profile = result as UserProfileModel;
      console.log('model:');
      console.log(this.profile);
      this.profileForm.patchValue(this.profile);
      this.current_options = this.profile.tutoringSubjects;
      console.log('form:')
      console.log(this.profileForm.value);
    },
      error => {
        this.errorHandler.handleError(error);
      });

  }

  initMultiSelectParams() {

    this.profileService.getStudentCompletedSubjects().subscribe(res => {
      this.subjects = res;
    },
      err => {
      });

  };


  public modProfile(profileFormValue) {
    if (this.profileForm.valid) {
      this.profile.firstName = profileFormValue.firstName;
      this.profile.lastName = profileFormValue.lastName;
      this.profile.email = profileFormValue.email;
      this.profile.messengerName = profileFormValue.messengerName;
      this.profile.instagramName = profileFormValue.instagramName;
      this.profile.neptunCode = profileFormValue.neptunCode;
      this.profile.tutoringSubjects = profileFormValue.tutoringSubjects;
      console.log('update:');
      console.log(this.profile);

      this.profileService.updateStudent(this.profile).subscribe(
        res=>{ 
          this.openSnackBar('Profile update was successful','OK');
          this.location.back();
        },
        error=>{this.errorHandler.handleError(error);})
    }
  }

  public compareFn(c1: SubjectModel, c2: SubjectModel): boolean {
    return c1 && c2 ? c1.subjectID === c2.subjectID : c1 === c2;
  }

  public validateControl(controlName: string) {
    if (this.profileForm.controls[controlName].invalid && this.profileForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.profileForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public onCancel() {
    this.location.back();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}


