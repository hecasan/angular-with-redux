import { Action } from '@ngrx/store';
import { Person } from '../person';

export enum PersonActionTypes {
  PERSON_ALL = '[PERSON_ALL] Listar pessoas',
  PERSON_NEW = '[PERSON_NEW] Add nova pessoa',
  PERSON_UPDATE = '[PERSON_UPDATE] Atualiza uma pessoa',
  PERSON_REMOVE = '[PERSON_REMOVE] Exclui uma pessoa',
}

export class PersonAll implements Action {
  readonly type = PersonActionTypes.PERSON_ALL;
}
export class PersonNew implements Action {
  readonly type = PersonActionTypes.PERSON_NEW;
  constructor(public payload: { person: Person }) {}
}
export class PersonUpdate implements Action {
  readonly type = PersonActionTypes.PERSON_UPDATE;
  constructor(public payload: { person: Person }) {}
}
export class PersonRemove implements Action {
  readonly type = PersonActionTypes.PERSON_REMOVE;
  constructor(public payload: { id: string }) {}
}

export type PersonActions = PersonAll | PersonNew | PersonUpdate | PersonRemove;
