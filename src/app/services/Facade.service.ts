import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  commentData: Array<{}> = [];
  timerFlag = 0;

  constructor() { }

  getCommentData() {
    return this.commentData;
  }

  addComment(commentData: { commentContent: any; commentTime: any; }): void {
    this.commentData.push(commentData);
  }

  startTimer(timerFlag: any) {
    this.timerFlag = timerFlag;
    console.log(this.timerFlag);
  }

  getTimerFlag() {
    return this.timerFlag;
  }
}
