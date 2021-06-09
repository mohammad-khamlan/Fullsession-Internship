import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  people = [
    {
      firstName: "Jo",
      lastName: "Aqra",
      age: "25",
      email: "jo@gmail.com"
    },

    {
      firstName: "Jad",
      lastName: "Aqra",
      age: "35",
      email: "jad@gmail.com"
    },

    {
      firstName: "moahmmad",
      lastName: "khamlan",
      age: "22",
      email: "mohammad@gmail.com"
    },

    {
      firstName: "abdallah",
      lastName: "saleh",
      age: "24",
      email: "abdallah@gmail.com"
    },

    {
      firstName: "noha",
      lastName: "thaher",
      age: "21",
      email: "noha@gmail.com"
    },

    {
      firstName: "ahmad",
      lastName: "ahmad",
      age: "18",
      email: "ahmad@gmail.com"
    },

    {
      firstName: "mustafa",
      lastName: "fehmi",
      age: "40",
      email: "mustafa@gmail.com"
    },

    {
      firstName: "fehmi",
      lastName: "mustafa",
      age: "30",
      email: "fehmi@gmail.com"
    },

    {
      firstName: "khaled",
      lastName: "ahmad",
      age: "12",
      email: "khaled@gmail.com"
    },

    {
      firstName: "tareq",
      lastName: "mohammad",
      age: "27",
      email: "tareq@gmail.com"
    },

    {
      firstName: "saleem",
      lastName: "ahmad",
      age: "29",
      email: "saleem@gmail.com"
    },
  ];

  numbers = Array.from(Array(this.people.length).keys());
  personNumber = 0;

  person = this.people[0];

  constructor() { }

  ngOnInit(): void {
    // this.selector.getPerson.subscribe((x) => (this.person = x));
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
