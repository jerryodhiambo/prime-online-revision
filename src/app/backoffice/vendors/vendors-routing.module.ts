import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllVendorsComponent } from './all-vendors/all-vendors.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorReportsComponent } from './vendor-reports/vendor-reports.component';

const routes: Routes = [
  {
    path: 'vendors-list',
    component: AllVendorsComponent,
  },
  {
    path: 'create-vendor',
    component: CreateVendorComponent,
  },
  {
    path: 'vendors-reports',
    component: VendorReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
