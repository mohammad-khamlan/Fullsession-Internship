import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/Facade.service';

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    constructor(private selector: FacadeService) { }

    comments: Array<{}> = [];
    flag = 0;

    ngOnInit(): void {
        this.comments = this.selector.getCommentData();
    }

}
