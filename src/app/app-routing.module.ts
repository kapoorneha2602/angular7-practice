import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ShapesComponent } from './shapes/shapes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
// import { InputOutputComponent } from './dashboard/input-output/input-output.component';
// import { ViewChildComponent } from './dashboard/view-child/view-child.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'app-drag-drop', component: DragDropComponent },
  { path: 'app-virtual-scroll', component: VirtualScrollComponent },
  { path: 'app-shapes', component: ShapesComponent },
  { path: 'app-reactive-form', component: ReactiveFormComponent },
  { path: 'app-life-cycle-hooks', component: LifeCycleHooksComponent },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
