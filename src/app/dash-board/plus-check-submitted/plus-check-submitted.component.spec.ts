import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusCheckSubmittedComponent } from './plus-check-submitted.component';

describe('PlusCheckSubmittedComponent', () => {
  let component: PlusCheckSubmittedComponent;
  let fixture: ComponentFixture<PlusCheckSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusCheckSubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusCheckSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
