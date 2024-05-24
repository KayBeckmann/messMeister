import Dexie, {Table} from 'dexie';

export interface Customer {
  id?: number;
  name: string;
  description: string;
}

export class AppDB extends Dexie {
  customers!: Table<Customer, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      customers: '++id'
    });
    this.on('populate', ()=> this.populate());
  }

  async populate() {
    const customersListId = await db.customers.add({
      name:'Brueggen',
      description:'some more information'
    })
  }

  async resetDatabase() {
    await db.transaction('rw', 'customers', () => {
      this.customers.clear();
    });
  }
}
export const db = new AppDB();