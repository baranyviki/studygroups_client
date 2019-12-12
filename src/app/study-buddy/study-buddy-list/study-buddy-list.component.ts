import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';
import { GeneralSelectionItem } from 'src/app/models/shared/general-selection-item.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StudyBuddyService } from '../study-buddy.service';
import { StudyBuddyListItem } from 'src/app/models/study-buddy/study-buddy-list-item.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { StudyBuddySearchModel } from 'src/app/models/study-buddy/study-buddy-search.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-study-buddy-list',
  templateUrl: './study-buddy-list.component.html',
  styleUrls: ['./study-buddy-list.component.scss']
})
export class StudyBuddyListComponent implements OnInit {

  subjects: GeneralSelectionItem[];
  filteredSubjects: Observable<GeneralSelectionItem[]>;
  dataSource: MatTableDataSource<StudyBuddyListItem>;
  displayedColumns: string[] = ['name', 'email','details'];

  public studyBuddyForm :FormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private studyBuddyService: StudyBuddyService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getSubjects();

    this.studyBuddyForm = new FormGroup({      
      subjectControl : new FormControl('', [Validators.required]),
      commonCourseControl: new FormControl(),
      currentlyEnrolledControl:new FormControl(),
      anotherTeacherControl:new FormControl(),
      completedControl:new FormControl(),
      gradeControl:new FormControl(),
      disciplinesControl:new FormControl()
    });
  }

  getSubjects() {
    this.studyBuddyService.getSubjectSelections().subscribe(result => {
      this.subjects = result;
    },
      (error) => { },
      () => {
        this.filteredSubjects = this.studyBuddyForm.get('subjectControl').valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.subjects.slice())
          );
      });
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/study-buddy/profile/${id}`;
    this.router.navigate([url]);
  }

  displayFn(item?: GeneralSelectionItem): string | undefined {
    return item ? item.displayName : undefined;
  }

  private _filter(value: string): GeneralSelectionItem[] {
    
    const filterValue = value.toLowerCase();

    return this.subjects.filter(subject => subject.displayName.toLowerCase().includes(filterValue));
    
  }

  search() {
    //const subjectId = (this.studyBuddyForm.get('subjectControl').value as GeneralSelectionItem).id;
    // this.studyBuddyService.getStudyBuddyList(subjectId).subscribe(result => {
    //   this.dataSource.data = result;
    // });
    let filters = {} as StudyBuddySearchModel;
    filters.subjectId = this.studyBuddyForm.get('subjectControl').value.id;
    filters.commonCourse = this.studyBuddyForm.get('commonCourseControl').value;
    filters.currentlyEnrolled = this.studyBuddyForm.get('currentlyEnrolledControl').value;
    filters.anotherTeacher = this.studyBuddyForm.get('anotherTeacherControl').value;
    filters.completed = this.studyBuddyForm.get('completedControl').value;
    filters.grade = this.studyBuddyForm.get('gradeControl').value;
    filters.discipline = this.studyBuddyForm.get('disciplinesControl').value;
  console.log(filters);
    this.studyBuddyService.getStudyGroupSearchList(filters).subscribe(result =>{
      this.dataSource.data=result;
    },(error)=>{
     // this.errorHandler.handleError(error);
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
