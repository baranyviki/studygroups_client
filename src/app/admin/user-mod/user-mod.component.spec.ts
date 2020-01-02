import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModComponent } from './user-mod.component';

describe('UserModComponent', () => {
  let component: UserModComponent;
  let fixture: ComponentFixture<UserModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
