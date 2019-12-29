import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { SubjectModel } from 'src/app/models/admin/subject.model';
import { GeneralSelectionItem } from 'src/app/models/shared/general-selection-item.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-subject-mod',
  templateUrl: './subject-mod.component.html',
  styleUrls: ['./subject-mod.component.scss']
})
export class SubjectModComponent implements OnInit {

  subjectTypes: GeneralSelectionItem[] = [
    { id: "0", displayName: "None" },
    { id: "1", displayName: "Mathematical And Natural Sciences" },
    { id: "2", displayName: "Enterprise Information Systems" },
    { id: "3", displayName: "Software Engineering" },
    { id: "4", displayName: "Networks And Information Security" },
    { id: "5", displayName: "Databases And Big Data" },
    { id: "6", displayName: "Embedded Systems" },
    { id: "7", displayName: "Economics" },
    { id: "8", displayName: "Humanities" },
    { id: "9", displayName: "Foundation Subjects" },
    { id: "11", displayName: "Computer Architectures" }
  ];

  constructor(private _snackBar: MatSnackBar,private location: Location, private activatedRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService, private adminService: AdminService) { }

  subject = {} as SubjectModel;
  public subjectForm: FormGroup;
  public isMod: boolean;

  ngOnInit() {
    this.createForm();
    let id: string = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isMod = true;
      this.subject.subjectid = id;
      console.log(id);
      this.getSubject(id);
    }
    console.log(this.subjectForm.get('subjectType').value);
  }

  public getSubject(id: string) {
    this.adminService.getSubject(id).subscribe(
      res => {
        this.subjectForm.patchValue(res);
        this.subjectForm.controls['subjectType'].setValue(this.subjectTypes[res.subjectType]);
        // console.log(res);        
        // console.log(res.subjectType);
        // console.log(this.subjectForm.value);
      },
      err => {
        this.errorHandler.handleError(err);
      }
    );
  }

  createForm() {
    this.subjectForm = new FormGroup({
      subjectCode: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      credits: new FormControl('', [Validators.required]),
      suggestedSemester: new FormControl(''),
      subjectType: new FormControl('')

    });
  }

  public modSubject() {
    this.adminService.updateSubject(this.subject).subscribe(
      res => {

        this.openSnackBar('Subject update was successful', 'OK');
        this.location.back();
      },
      err => {
        this.errorHandler.handleError(err);
      }
    );
  }

  public createSubject() {
    this.adminService.createSubject(this.subject).subscribe(
      res => {

        this.openSnackBar('Subject creation was successful', 'OK');
        this.location.back();
      },
      err => {
        this.errorHandler.handleError(err);
      }
    );
  }

  public submitSubject() {
    if (this.subjectForm.valid) {
      let formValue = this.subjectForm.value;
      this.subject.subjectcode = formValue.subjectCode;
      this.subject.name = formValue.name;
      this.subject.suggestedsemester = formValue.suggestedSemester;
      this.subject.subjectType = formValue.subjectType.id;
      this.subject.credits = formValue.credits;
      console.log(this.subject);
      if (this.isMod) {
        this.modSubject();
      }
      else {
        this.createSubject();
      }
    }
  }

  public validateControl(controlName: string) {
    if (this.subjectForm.controls[controlName].invalid && this.subjectForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.subjectForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public onCancel() {
    this.location.back();
  }

  compareSubjectTypes(object1: any, object2: any) {
    return object1 && object2 && object1.id == object2.id;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
