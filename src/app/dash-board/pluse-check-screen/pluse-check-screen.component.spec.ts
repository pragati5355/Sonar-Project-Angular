import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluseCheckScreenComponent } from './pluse-check-screen.component';

describe('PluseCheckScreenComponent', () => {
  let component: PluseCheckScreenComponent;
  let fixture: ComponentFixture<PluseCheckScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluseCheckScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluseCheckScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
