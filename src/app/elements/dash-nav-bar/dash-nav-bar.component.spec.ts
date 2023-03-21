import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavBarComponent } from './dash-nav-bar.component';

describe('DashNavBarComponent', () => {
  let component: DashNavBarComponent;
  let fixture: ComponentFixture<DashNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
