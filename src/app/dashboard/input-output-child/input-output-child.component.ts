import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent implements OnInit {

  @Input() empArr:any;
  constructor() { }

  ngOnInit() {
  }

}
