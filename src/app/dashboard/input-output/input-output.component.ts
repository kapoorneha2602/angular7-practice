import { Component, OnInit } from '@angular/core';
import { EMP } from './mock-emp';
@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  empArr = EMP;
  constructor() {
  }
  
  ngOnInit() {
  
  }
}