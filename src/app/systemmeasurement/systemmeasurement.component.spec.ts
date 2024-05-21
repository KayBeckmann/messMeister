import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemmeasurementComponent } from './systemmeasurement.component';

describe('SystemmeasurementComponent', () => {
  let component: SystemmeasurementComponent;
  let fixture: ComponentFixture<SystemmeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemmeasurementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemmeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
