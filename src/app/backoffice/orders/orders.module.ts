import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderReportsComponent } from './order-reports/order-reports.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [OrderReportsComponent, AllOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
})
export class OrdersModule {}
