import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatMenuModule, MatInputModule, MatTableModule, MatButtonModule,
  MatCardModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ShapesComponent } from './shapes/shapes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationComponent } from './authorization/authorization.component';
import { InputOutputChildComponent } from './dashboard/input-view-child/input-view-child.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    VirtualScrollComponent,
    ShapesComponent,
    ReactiveFormComponent,
    AuthorizationComponent,
    InputOutputChildComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, MatMenuModule, MatInputModule, MatTableModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatSortModule,
    DragDropModule,
    ScrollingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
