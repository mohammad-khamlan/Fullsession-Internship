import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'smooth-scrolling',
  templateUrl: './smooth-scrolling.component.html',
  styleUrls: ['./smooth-scrolling.component.scss']
})
export class SmoothScrollingComponent implements OnInit {

  ngOnInit() { }

  constructor() { }


  events = [
    {
      "index": 0,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 1,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 2,
      "type": 1,
      "description": "Visit new page event"
    },
    {
      "index": 3,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 4,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 5,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 6,
      "type": 2,
      "description": "Scroll event"
    }
  ];

  counter = 0;

  @ViewChild('scrollframe')
  scrollframe!: ElementRef;


  autoScrolling(): void {
    let scrollAmount = 72;
    try {
      var interval = setInterval(() => {
        if (this.counter == this.events.length - 2) clearInterval(interval);
        this.scrollframe.nativeElement.scrollTop += scrollAmount;
        this.counter += 1;
      }, 1000);
    } catch (err) { }
  }


  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.events.push({});
  //   }, 500);
  // }

}
