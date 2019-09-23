import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from './state.action';
import { StateModel } from './state.model';

@Injectable({ providedIn: 'root' })
export class StateDispatchersService {

  constructor(
    private store: Store<StateModel>
  ) { }

  loadUsers() {
    this.store.dispatch(actions.loadUsers());
  }

  loadArticles(id: number) {
    this.store.dispatch(actions.loadArticlesByUser({ id }));
  }
}
