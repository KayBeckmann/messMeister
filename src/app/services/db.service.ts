import Dexie, { Table } from 'dexie';

export interface Customer {
  id?: number;
  name: string;
  description: string;
}

export interface Location {
  id?: number;
  customerId: number;
  name: string;
  description: string;
}

export interface Device {
  id?: number;
  name: string;
  description: string;
  locationId: number;
  rcdId: number;
  type: string;
  current: number;
}

export interface MeasurementDevice {
  id?: number;
  deviceId: number;
  date: Date;
  isolation: number;
  lpe: number;
  ln: number;
  rcdId: number;
}

export interface RCD {
  id?: number;
  name: string;
  description: string;
  nenncurrent: number;
  diffcurrent: number;
}

export interface MeasurementRcd {
  id?: number;
  RcdId: number;
  date: Date;
  rcdId: number;
  time: number;
  current: number;
}

export class AppDB extends Dexie {
  customers!: Table<Customer, number>;
  locations!: Dexie.Table<Location, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      customers: '++id',
      locations: '++id, customerId',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const customersListId = await db.customers.add({
      name: 'Brueggen',
      description: 'some more information',
    });
    const locationListId = await db.locations.add({
      customerId: 1,
      name: 'Werk 1',
      description: 'Hauptwerk',
    });
  }

  async resetDatabase() {
    await db.transaction('rw', 'customers', () => {
      this.customers.clear();
    });
  }
}
export const db = new AppDB();
