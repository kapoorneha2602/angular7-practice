import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-view-child',
  templateUrl: './input-view-child.component.html',
  styleUrls: ['./input-view-child.component.scss']
})
export class InputOutputChildComponent implements OnInit {

  constructor() { }
  ngOnInit() { }


  // Input Output
  @Input() empArr: any;

  // View Child
  message = 'Hola Mundo!';
}