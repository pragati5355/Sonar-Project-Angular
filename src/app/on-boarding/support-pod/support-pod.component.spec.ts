import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPodComponent } from './support-pod.component';

describe('SupportPodComponent', () => {
  let component: SupportPodComponent;
  let fixture: ComponentFixture<SupportPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportPodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
