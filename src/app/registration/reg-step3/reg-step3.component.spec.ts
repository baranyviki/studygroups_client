import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStep3Component } from './reg-step3.component';

describe('RegStep3Component', () => {
  let component: RegStep3Component;
  let fixture: ComponentFixture<RegStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
