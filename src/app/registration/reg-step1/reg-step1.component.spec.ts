import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStep1Component } from './reg-step1.component';

describe('RegStep1Component', () => {
  let component: RegStep1Component;
  let fixture: ComponentFixture<RegStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
