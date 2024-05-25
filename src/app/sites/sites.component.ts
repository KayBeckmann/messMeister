import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { liveQuery } from 'dexie';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { db } from '../services/db.service';

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss',
})
export class SitesComponent implements OnInit {
  customerId!: number;
  locations$ = liveQuery(() =>
    db.locations.where('customerId').equals(this.customerId).toArray()
  );
  name!: string;
  description!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.customerId = params['id'];
    });
    this.locations$ = liveQuery(() =>
      db.locations.where('customerId').equals(this.customerId).toArray()
    );
  }

  addNewLocation() {
    db.locations.add({
      customerId: this.customerId,
      name: this.name,
      description: this.description,
    });
    this.name = '';
    this.description = '';
  }

  loadMeasurement(id: any) {
    this.router.navigate(['/measurement'], { queryParams: { id } });
  }
}
