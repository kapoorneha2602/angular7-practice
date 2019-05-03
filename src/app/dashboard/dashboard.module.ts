import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewChildComponent } from './view-child/view-child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DashboardComponent } from './dashboard.component';
import { InputOutputChildComponent } from './input-view-child/input-view-child.component';

@NgModule({
  declarations: [ViewChildComponent, InputOutputComponent,DashboardComponent, InputOutputChildComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
