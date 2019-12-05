import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModComponent } from './profile-mod.component';

describe('ProfileModComponent', () => {
  let component: ProfileModComponent;
  let fixture: ComponentFixture<ProfileModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
