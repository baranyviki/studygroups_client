import { Component, OnInit } from '@angular/core';
import { SubjectModel } from 'src/app/models/profile/subject.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-mod',
  templateUrl: './subject-mod.component.html',
  styleUrls: ['./subject-mod.component.scss']
})
export class SubjectModComponent implements OnInit {

  constructor(private location: Location, private activatedRoute: ActivatedRoute) { }

  subject = {} as SubjectModel;
  public subjectForm: FormGroup;
  isMod: boolean;

  ngOnInit() {
    this.createForm();
    let id: string = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.isMod = true;
      console.log(id);
    }

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

  public modSubject(profileFormValue) {

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

}
