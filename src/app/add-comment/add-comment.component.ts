import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FacadeService } from '../services/Facade.service';

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  timer = 0;
  commentTime = 0;
  timerFlag = 0;

  constructor(private selector: FacadeService) { }

  ngOnInit(): void {
    this.timerFlag = this.selector.getTimerFlag();
    this.startAndStopTimer();
  }

  startAndStopTimer() {
    var interval = setInterval(() => {
      // if (this.timerFlag == 0) clearInterval(interval);
      this.timer += 1;
    }, 1)
  }

  addCommentClick() {
    this.commentTime = this.timer;
  }

  addComment(data: any) {
    const comment = data.textArea;
    const commentData = {
      commentContent: comment,
      commentTime: this.commentTime
    }

    this.selector.addComment(commentData);
  }


}
