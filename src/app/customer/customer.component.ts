import { Component, OnInit } from '@angular/core';
import {db, Customer} from '../services/db.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
 customers: Customer[] = [];
 userInput!: Customer;

 async ngOnInit(){
  this.customers = await db.customer.toArray();
 }

 addItem() {
this.customers.push(this.userInput);
}
}
