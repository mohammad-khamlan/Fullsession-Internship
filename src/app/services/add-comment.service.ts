import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCommentService {

  commentData = {};

  constructor() { }

  getCommentData(): {} {
    console.log("kljhgf");
    return this.commentData;
  }

  addComment(commentData: {}): void {
    this.commentData = commentData;
  }
}
