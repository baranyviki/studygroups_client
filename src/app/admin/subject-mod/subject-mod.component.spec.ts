import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectModComponent } from './subject-mod.component';

describe('SubjectModComponent', () => {
  let component: SubjectModComponent;
  let fixture: ComponentFixture<SubjectModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
