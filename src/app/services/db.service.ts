import Dexie from 'dexie';

export class AppDB extends Dexie {
  customer: Dexie.Table<Customer, number>;

  constructor() {
    super('AppDB');
    this.version(1).stores({
      customer: '++id,name,description'
    });
    this.customer = this.table('customer');
  }
}

export interface Customer {
  id?: number;
  name: string;
  description: string;
}

export const db = new AppDB();