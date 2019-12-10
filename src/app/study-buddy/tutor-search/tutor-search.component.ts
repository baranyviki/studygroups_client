import { Component, OnInit, ViewChild } from '@angular/core';
import { StudyBuddyService } from '../study-buddy.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralSelectionItem } from 'src/app/models/shared/general-selection-item.model';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { StudyBuddyListItem } from 'src/app/models/study-buddy/study-buddy-list-item.model';
import { startWith, map } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-search',
  templateUrl: './tutor-search.component.html',
  styleUrls: ['./tutor-search.component.scss']
})
export class TutorSearchComponent implements OnInit {

  tutorFilterForm: FormGroup;
  subjects: GeneralSelectionItem[];
  filteredSubjects: Observable<GeneralSelectionItem[]>;
  dataSource: MatTableDataSource<StudyBuddyListItem>;
  displayedColumns: string[] = ['name', 'email', 'details'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private studyBuddyService: StudyBuddyService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.tutorFilterForm = new FormGroup({
      subjectControl: new FormControl('', [Validators.required]),
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
    this.studyBuddyService.getSubjectSelections().subscribe(result => {
      this.subjects = result;
    },
      (error) => { },
      () => {
        this.filteredSubjects = this.tutorFilterForm.get('subjectControl').valueChanges
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
    const subjectId = (this.tutorFilterForm.get('subjectControl').value as GeneralSelectionItem).id;
    this.studyBuddyService.getTutorListBySubjectId(subjectId).subscribe(
      res => {
        this.dataSource.data = res;
      },
      err => {
        this.errorHandler.handleError(err);

      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
