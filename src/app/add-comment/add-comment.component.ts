import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AddCommentService } from '../services/add-comment.service';

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  counter = 0;
  commentTime = 0;
  commentData = {};

  constructor(private selector: AddCommentService) { }

  ngOnInit(): void {
    var interval = setInterval(() => {
      this.counter += 1;
    }, 2000);
  }

  addCommentClick() {
    this.commentTime = this.counter;
  }

  addComment(data: any) {
    const comment = data.textArea;
    this.commentData = {
      "commentContent": comment,
      "commentTime": this.commentTime
    }

    this.selector.addComment(this.commentData);
  }


}
