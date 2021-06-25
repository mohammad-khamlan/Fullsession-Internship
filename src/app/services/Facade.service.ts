import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  commentData: Array<[any, any]> = [];
  timerFlag = 0;
  // subject = new BehaviorSubject(0);

  constructor() { }

  getCommentData() {
    return this.commentData;
  }

  addComment(commentData: any): void {
    this.commentData.push(commentData);
  }

  startTimer(timerFlag: number) {
    this.timerFlag = timerFlag;
    // this.subject.subscribe(console.log);
    // this.subject.next(timerFlag);
    // this.subject.subscribe(console.log);
  }

  getTimerFlag() {
    return this.timerFlag;
  }
}
