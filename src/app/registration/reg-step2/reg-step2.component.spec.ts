import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStep2Component } from './reg-step2.component';

describe('RegStep2Component', () => {
  let component: RegStep2Component;
  let fixture: ComponentFixture<RegStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
