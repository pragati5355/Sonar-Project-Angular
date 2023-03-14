import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingScreenComponent } from './on-boarding-screen.component';

describe('OnBoardingScreenComponent', () => {
  let component: OnBoardingScreenComponent;
  let fixture: ComponentFixture<OnBoardingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnBoardingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
