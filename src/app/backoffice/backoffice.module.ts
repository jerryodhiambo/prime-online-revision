import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackofficeComponent],
  imports: [CommonModule, BackofficeRoutingModule, RouterModule, LayoutModule],
})
export class BackofficeModule {}
