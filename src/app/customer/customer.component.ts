import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
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
 customers$= liveQuery(() => db.customers.toArray())
 name: string ='';
 description: string ='';

 async addNewCustomer(){
  await db.customers.add({
    name: this.name,
    description: this.description
  })
 }
}
