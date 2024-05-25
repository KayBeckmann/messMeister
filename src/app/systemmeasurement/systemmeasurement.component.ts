import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-systemmeasurement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './systemmeasurement.component.html',
  styleUrl: './systemmeasurement.component.scss',
})
export class SystemmeasurementComponent {
  locationId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.locationId = params['id'];
    });
    // this.locations$ = liveQuery(() =>
    //   db.locations.where('customerId').equals(this.customerId).toArray()
    // );
  }
}
