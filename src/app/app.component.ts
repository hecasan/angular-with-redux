import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Person } from './person';
import * as faker from 'faker';
import { select, Store } from '@ngrx/store';
import { AppState, pessoaSelecionada } from './store/index';
import {
  PersonAll,
  PersonNew,
  PersonUpdate,
  PersonRemove,
} from './store/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new PersonAll());
    // this.people$ = this.store.pipe(select('people'));
    this.people$ = this.store.select(pessoaSelecionada);
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString(),
    };
    this.store.dispatch(new PersonNew({ person }));
  }
  update(p: Person) {
    const person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
    };

    this.store.dispatch(new PersonUpdate({ person: { ...p, ...person } }));
  }
  delete(p: Person) {
    this.store.dispatch(new PersonRemove({ id: p._id }));
  }
}
