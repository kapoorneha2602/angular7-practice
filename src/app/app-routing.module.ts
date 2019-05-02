import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ShapesComponent } from './shapes/shapes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'app-drag-drop', component: DragDropComponent },
  { path: 'app-virtual-scroll', component: VirtualScrollComponent },
  { path: 'app-shapes', component: ShapesComponent },
  { path: 'app-reactive-form', component: ReactiveFormComponent },
  { path: 'app-dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
