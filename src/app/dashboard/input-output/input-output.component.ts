import { Component, OnInit, ViewChild } from '@angular/core';
import { EMP } from './mock-emp';
// import { ViewChildComponent } from '../view-child/view-child.component';
@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  constructor() {
  }

  // Input Ouput
  empArr = EMP;
  
  ngOnInit() {
  }
}