import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddPersonService } from './add-person.service';

@Injectable({
  providedIn: 'root'
})

export class GetPersonService {

  constructor(private selector: AddPersonService) { }

  private people = new BehaviorSubject<Array<{}>>([]);

  getPeople(): Array<{}> {
    return this.selector.getPeople();
  }

}
