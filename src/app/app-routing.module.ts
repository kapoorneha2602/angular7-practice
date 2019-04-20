import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ShapesComponent } from './shapes/shapes.component';

const routes: Routes = [
  { path: '',redirectTo: '',pathMatch: 'full'},
  { path: 'app-drag-drop', component: DragDropComponent },
  { path: 'app-virtual-scroll', component: VirtualScrollComponent },
  { path: 'app-shapes', component: ShapesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
