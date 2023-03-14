import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeHolderSelectionComponent } from './stake-holder-selection.component';

describe('StakeHolderSelectionComponent', () => {
  let component: StakeHolderSelectionComponent;
  let fixture: ComponentFixture<StakeHolderSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeHolderSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeHolderSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
