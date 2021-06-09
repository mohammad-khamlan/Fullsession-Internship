import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPersonService } from './get-person.service';

@Injectable({
  providedIn: 'root'
})
export class AddPersonService {

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
    }
  ];

  getPeople(): Array<{}> {
    return this.people;
  }

  constructor() { }


}
