import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStep5Component } from './reg-step5.component';

describe('RegStep5Component', () => {
  let component: RegStep5Component;
  let fixture: ComponentFixture<RegStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
