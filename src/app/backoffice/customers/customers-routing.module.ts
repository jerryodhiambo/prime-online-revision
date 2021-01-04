import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { CustomerReportsComponent } from './customer-reports/customer-reports.component';

const routes: Routes = [
  {
    path: 'customer-reports',
    component: CustomerReportsComponent,
  },
  {
    path: 'customers-list',
    component: AllCustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
