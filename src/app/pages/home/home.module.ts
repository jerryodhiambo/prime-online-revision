import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { LayoutModule } from '../layout/layout.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgApexchartsModule,
    LayoutModule
  ]
})
export class HomeModule { }
