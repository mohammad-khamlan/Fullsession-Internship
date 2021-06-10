import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPersonService } from '../services/get-person.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  public people: Array<{}> = [];

  personNumber = 0;

  person = {};

  constructor(private selector: GetPersonService) { }

  ngOnInit(): void {
    this.people = this.selector.getPeople();
    this.person = this.people[0]
  }

  nextPerson() {
    if (this.personNumber < this.people.length) {
      this.personNumber = this.personNumber + 1;
    }
    this.person = this.people[this.personNumber];
  }

  previousPerson() {
    if (this.personNumber > 0) {
      this.personNumber = this.personNumber - 1;
    }
    this.person = this.people[this.personNumber];
  }

  personByNumber(x: any) {
    this.personNumber = x;
    this.person = this.people[this.personNumber];
  }
}


