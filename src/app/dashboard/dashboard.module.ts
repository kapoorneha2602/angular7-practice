import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewChildComponent } from './view-child/view-child.component';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
  declarations: [ViewChildComponent, InputOutputComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
