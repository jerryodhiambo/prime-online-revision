import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payment-routing.module';
import { PaymentsComponent } from '../payments.component';
import { LayoutModule } from '../../layout/layout.module';



@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    PaymentsRoutingModule,
    LayoutModule,
    CommonModule
  ]
})
export class PaymentsModule { }
