import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderReportsComponent } from './order-reports/order-reports.component';

const routes: Routes = [
  {
    path: 'order-reports',
    component: OrderReportsComponent,
  },
  {
    path: 'orders-list',
    component: AllOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
