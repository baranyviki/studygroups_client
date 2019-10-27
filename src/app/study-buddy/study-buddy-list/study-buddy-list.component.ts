import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeneralSelectionItem } from 'src/app/models/shared/general-selection-item.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StudyBuddyService } from '../study-buddy.service';

@Component({
  selector: 'app-study-buddy-list',
  templateUrl: './study-buddy-list.component.html',
  styleUrls: ['./study-buddy-list.component.scss']
})
export class StudyBuddyListComponent implements OnInit {

  subjectControl = new FormControl('', [Validators.required]);
  subjects: GeneralSelectionItem[];
  filteredSubjects: Observable<GeneralSelectionItem[]>;

  constructor(
    private studyBuddyService: StudyBuddyService
  ) { }

  ngOnInit() {
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

  displayFn(item?: GeneralSelectionItem): string | undefined {
    return item ? item.displayName : undefined;
  }

  private _filter(value: string): GeneralSelectionItem[] {
    console.log(value);
    const filterValue = value.toLowerCase();

    return this.subjects.filter(subject => subject.displayName.toLowerCase().includes(filterValue));
  }
}
