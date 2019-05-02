import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { InputOutputComponent } from './input-output/input-output.component';

const routes: Routes = [
  {
    path: '',
    component: InputOutputComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
