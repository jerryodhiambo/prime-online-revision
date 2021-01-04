import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from '../reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { LayoutModule } from '../../layout/layout.module';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule,
    LayoutModule,
    CommonModule
  ]
})
export class ReportsModule { }
