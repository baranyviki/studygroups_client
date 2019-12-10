import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralSelectionItem } from 'src/app/models/shared/general-selection-item.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { StudyBuddyListItem } from 'src/app/models/study-buddy/study-buddy-list-item.model';
import { StudyBuddyService } from '../study-buddy.service';
import { startWith, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { StudyGroupSearchModel } from 'src/app/models/study-buddy/study-group-search.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-team-search',
  templateUrl: './study-team-search.component.html',
  styleUrls: ['./study-team-search.component.scss']
})
export class StudyTeamSearchComponent implements OnInit {

  studyteamFilterForm: FormGroup;
  subjects: GeneralSelectionItem[];
  filteredSubjects: Observable<GeneralSelectionItem[]>;
  dataSource: MatTableDataSource<StudyBuddyListItem>;
  displayedColumns: string[] = ['name', 'email', 'details'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private studyBuddyService: StudyBuddyService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.studyteamFilterForm = new FormGroup({
      subjectControl: new FormControl('', [Validators.required]),
      gradeAvgControl: new FormControl(''),
      semesterCntControl: new FormControl(''),
      commonCourseControl: new FormControl('')
    });

    this.getSubjects();


  }

  public redirectToDetails = (id: string) => {
    console.log('userid:');

    console.log(id);
    let url: string = `/study-buddy/profile/${id}`;
    this.router.navigate([url]);
  }

  getSubjects() {
    this.studyBuddyService.getCourseSelectionsForUserInCurrentSemester().subscribe(result => {
      this.subjects = result;
    },
      (error) => { },
      () => {
        this.filteredSubjects = this.studyteamFilterForm.get('subjectControl').valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.subjects.slice())
          );
      });
  }

  displayFn(item?: GeneralSelectionItem): string | undefined {
    return item ? item.displayName : undefined;
  }

  private _filter(value: string): GeneralSelectionItem[] {
    console.log(value);
    const filterValue = value.toLowerCase();

    return this.subjects.filter(subject => subject.displayName.toLowerCase().includes(filterValue));
  }

  search() {
    const subjectId = (this.studyteamFilterForm.get('subjectControl').value as GeneralSelectionItem).id;
    let filters = {} as StudyGroupSearchModel;
    filters.courseId = this.studyteamFilterForm.value.subjectControl.id;
    filters.isHavingOtherCourseInCommonCurrently = this.studyteamFilterForm.get('commonCourseControl').value ? this.studyteamFilterForm.get('commonCourseControl').value : "false";
    filters.isSameCompletedSemesters = this.studyteamFilterForm.get('semesterCntControl').value ? this.studyteamFilterForm.get('semesterCntControl').value : "false";
    filters.isSameGradeAverage = this.studyteamFilterForm.get('gradeAvgControl').value ? this.studyteamFilterForm.get('gradeAvgControl').value : "false";

    this.studyBuddyService.getStudyTeamSearchList(filters).subscribe(result => {
      this.dataSource.data = result;
    },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
