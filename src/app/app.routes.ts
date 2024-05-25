import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { SitesComponent } from './sites/sites.component';
import { SystemmeasurementComponent } from './systemmeasurement/systemmeasurement.component';

export const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'location', component: SitesComponent },
  { path: 'measurement', component: SystemmeasurementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
