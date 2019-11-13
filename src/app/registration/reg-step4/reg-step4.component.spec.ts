import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStep4Component } from './reg-step4.component';

describe('RegStep4Component', () => {
  let component: RegStep4Component;
  let fixture: ComponentFixture<RegStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
