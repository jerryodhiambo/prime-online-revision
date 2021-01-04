import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerReportsComponent } from './customer-reports/customer-reports.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerReportsComponent, AllCustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class CustomersModule {}
