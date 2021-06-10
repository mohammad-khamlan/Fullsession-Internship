import { Component, OnInit } from '@angular/core';
import { AddPersonService } from '../services/add-person.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  constructor(private selector: AddPersonService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {
    const person = {
      firstName: data.firstname,
      lastName: data.lastname,
      age: data.age,
      email: data.email
    }

    this.selector.addPerson(person);

  };

}
