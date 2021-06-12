import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
      "description": "Click event",
      "duration": 1000
    },
    {
      "index": 1,
      "type": 0,
      "description": "Click event",
      "duration": 3000
    },
    {
      "index": 2,
      "type": 1,
      "description": "Visit new page event",
      "duration": 1000
    },
    {
      "index": 3,
      "type": 0,
      "description": "Click event",
      "duration": 2000
    },
    {
      "index": 4,
      "type": 0,
      "description": "Click event",
      "duration": 3000
    },
    {
      "index": 5,
      "type": 0,
      "description": "Click event",
      "duration": 2000
    },
    {
      "index": 6,
      "type": 2,
      "description": "Scroll event",
      "duration": 1000
    }
  ];

  counter = 0;

  @ViewChild('scrollframe')
  scrollframe!: ElementRef;


  autoScrolling(): void {
    this.scrollframe.nativeElement.scrollTop = 0;
    this.counter = 0;
    let scrollAmount = 120;
    let time = this.events[this.counter].duration;

    var interval = setInterval(() => {
      if (this.counter == this.events.length - 2) clearInterval(interval);
      setTimeout(() => {
        console.log(this.events[this.counter].duration);
        this.scrollframe.nativeElement.scrollTop += scrollAmount;
        this.counter += 1;
      }, this.events[this.counter].duration);
    }, 1000);


    // try {
    //   var interval = setInterval(() => {
    //     if (this.counter == this.events.length - 2) clearInterval(interval);
    //     this.scrollframe.nativeElement.scrollTop += scrollAmount;
    //     this.counter += 1;
    //     console.log(this.events[this.counter].duration);
    //   }, time);
    // } catch (err) { }
  }


  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.events.push({});
  //   }, 500);
  // }

}
