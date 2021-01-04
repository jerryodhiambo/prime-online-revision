import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { AllVendorsComponent } from './all-vendors/all-vendors.component';
import { VendorReportsComponent } from './vendor-reports/vendor-reports.component';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateVendorComponent,
    AllVendorsComponent,
    VendorReportsComponent,
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    ArchwizardModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class VendorsModule {}
