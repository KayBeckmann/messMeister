import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { SitesComponent } from './sites/sites.component';

export const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'location', component: SitesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
