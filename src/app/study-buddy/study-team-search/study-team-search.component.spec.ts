import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTeamSearchComponent } from './study-team-search.component';

describe('StudyGroupSearchComponent', () => {
  let component: StudyTeamSearchComponent;
  let fixture: ComponentFixture<StudyTeamSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyTeamSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyTeamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
