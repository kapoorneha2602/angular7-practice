import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'app-input-output', pathMatch: 'full' },
      { path: 'app-input-output', component: InputOutputComponent},
      { path: 'app-view-child', component: ViewChildComponent}
   ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
