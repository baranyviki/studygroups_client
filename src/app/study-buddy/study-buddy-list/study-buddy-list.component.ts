import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeneralSelectionItem } from 'src/app/models/shared/general-selection-item.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StudyBuddyService } from '../study-buddy.service';
import { StudyBuddyListItem } from 'src/app/models/study-buddy/study-buddy-list-item.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-buddy-list',
  templateUrl: './study-buddy-list.component.html',
  styleUrls: ['./study-buddy-list.component.scss']
})
export class StudyBuddyListComponent implements OnInit {

  subjectControl = new FormControl('', [Validators.required]);
  subjects: GeneralSelectionItem[];
  filteredSubjects: Observable<GeneralSelectionItem[]>;
  dataSource: MatTableDataSource<StudyBuddyListItem>;
  displayedColumns: string[] = ['name', 'email','details'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private studyBuddyService: StudyBuddyService,
    private router: Router
  ) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getSubjects();
  }

  getSubjects() {
    this.studyBuddyService.getSubjectSelections().subscribe(result => {
      this.subjects = result;
    },
      (error) => { },
      () => {
        this.filteredSubjects = this.subjectControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.subjects.slice())
          );
      });
  }

  public redirectToDetails = (id: string) => {
    console.log('userid:');
    
    console.log(id);
    let url: string = `/study-buddy/profile/${id}`;
    this.router.navigate([url]);
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
    const subjectId = (this.subjectControl.value as GeneralSelectionItem).id;
    this.studyBuddyService.getStudyBuddyList(subjectId).subscribe(result => {
      this.dataSource.data = result;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
