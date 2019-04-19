import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  title = 'Angular 7 – Virtual Scrolling and Drag and Drop features';
  scrollItems: number[] = [];
  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.scrollItems.push(index);
    }
  }

  ngOnInit() {
  }

}
