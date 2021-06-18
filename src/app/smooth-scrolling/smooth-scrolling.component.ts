import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AddCommentService } from '../services/add-comment.service';

@Component({
  selector: 'smooth-scrolling',
  templateUrl: './smooth-scrolling.component.html',
  styleUrls: ['./smooth-scrolling.component.scss']
})
export class SmoothScrollingComponent implements OnInit {


  // events = [
  //   {
  //     "index": 0,
  //     "type": 0,
  //     "description": "Click event",
  //     "duration": 1000
  //   },
  //   {
  //     "index": 1,
  //     "type": 0,
  //     "description": "Click event",
  //     "duration": 3000
  //   },
  //   {
  //     "index": 2,
  //     "type": 1,
  //     "description": "Visit new page event",
  //     "duration": 1000
  //   },
  //   {
  //     "index": 3,
  //     "type": 0,
  //     "description": "Click event",
  //     "duration": 2000
  //   },
  //   {
  //     "index": 4,
  //     "type": 0,
  //     "description": "Click event",
  //     "duration": 3000
  //   },
  //   {
  //     "index": 5,
  //     "type": 0,
  //     "description": "Click event",
  //     "duration": 2000
  //   },
  //   {
  //     "index": 6,
  //     "type": 2,
  //     "description": "Scroll event",
  //     "duration": 1000
  //   }
  // ];

  events: any = [];
  time: any = [];
  duration: any = [];
  data: any = [];
  commentData: any = {};
  indexCounter = 0;

  constructor(private httpClient: HttpClient, private selector: AddCommentService) { }

  ngOnInit() {

    this.httpClient.get("assets/session-events.json").subscribe(data => {
      console.log(data);
      this.data = data;

      for (let index = 0; index < this.data.length; index++) {
        var date = new Date(this.data[index].timestamp * 1000);

        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


        // Compute duration time for each event
        var secondsDifference;
        if (index + 1 != this.data.length) {
          var currentTimestamp = this.data[index].timestamp;
          var nextTimestamp = this.data[index + 1].timestamp;

          var difference = nextTimestamp - currentTimestamp;
          secondsDifference = Math.floor(difference);
        }

        if ((this.data[index].type === 3 && this.data[index].data.source === 2 && this.data[index].data.type === 2) || this.data[index].type === 4) {
          this.data[index].index = this.indexCounter;
          this.events.push(this.data[index]);
          this.time.push(formattedTime);
          this.duration.push(secondsDifference);
          this.indexCounter += 1;
        }
      }

    });

  }




  counter = 0;
  timer = 0;

  @ViewChild('scrollframe')
  scrollframe!: ElementRef;


  autoScrolling(): void {
    this.scrollframe.nativeElement.scrollTop = 0;
    this.counter = 0;
    let scrollAmount = 150;//this.scrollframe.nativeElement.scrollHeight / this.events.length / 2;
    let time = this.events[this.counter].duration;

    var interval = setInterval(() => {
      this.commentData = this.selector.getCommentData();
      if (this.counter == this.events.length - 1) clearInterval(interval);
      this.scrollframe.nativeElement.scrollTop += scrollAmount;
      this.counter += 1;
      console.log("cd", this.commentData);
    }, 2000);


    // try {
    //   var interval = setInterval(() => {
    //     if (this.counter == this.events.length - 2) clearInterval(interval);
    //     this.scrollframe.nativeElement.scrollTop += scrollAmount;
    //     this.counter += 1;
    //     console.log(this.events[this.counter].duration);
    //   }, time);
    // } catch (err) { }
  }

}
