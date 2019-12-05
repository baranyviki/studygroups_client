import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyBuddyListComponent } from './study-buddy-list.component';

describe('StudyBuddyListComponent', () => {
  let component: StudyBuddyListComponent;
  let fixture: ComponentFixture<StudyBuddyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyBuddyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyBuddyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
