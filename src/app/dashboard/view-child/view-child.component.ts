import { Component, OnInit,ViewChild } from '@angular/core';
import { InputOutputChildComponent } from '../input-view-child/input-view-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  // message = 'Hola Mundo!';
  constructor() { }

   // View Child
   @ViewChild(InputOutputChildComponent) child;
   msg: any;
 
   ngOnInit() {
     // View Child
     this.msg = (JSON.parse(JSON.stringify(this.child)).message);
   }
}
