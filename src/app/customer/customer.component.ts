import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { liveQuery } from 'dexie';
import { db } from '../services/db.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  customers$ = liveQuery(() => db.customers.toArray());
  name: string = '';
  description: string = '';

  constructor(private router: Router) {}

  async addNewCustomer() {
    await db.customers.add({
      name: this.name,
      description: this.description,
    });

    this.name = '';
    this.description = '';
  }

  loadLocation(id: any) {
    this.router.navigate(['/location'], { queryParams: { id } });
  }
}
