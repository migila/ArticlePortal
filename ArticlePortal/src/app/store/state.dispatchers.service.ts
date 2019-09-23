import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateModel } from './state.model';
import * as actions from './state.action';

@Injectable()
export class CompanyDispatchersService {

  constructor(
    private store: Store<StateModel>
  ) { }

  loadUsers() {
    this.store.dispatch(actions.loadUsers());
  }
}
