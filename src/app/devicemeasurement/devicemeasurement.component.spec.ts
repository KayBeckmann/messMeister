import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicemeasurementComponent } from './devicemeasurement.component';

describe('DevicemeasurementComponent', () => {
  let component: DevicemeasurementComponent;
  let fixture: ComponentFixture<DevicemeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicemeasurementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevicemeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
