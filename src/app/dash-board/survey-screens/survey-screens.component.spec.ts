import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyScreensComponent } from './survey-screens.component';

describe('SurveyScreensComponent', () => {
  let component: SurveyScreensComponent;
  let fixture: ComponentFixture<SurveyScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
