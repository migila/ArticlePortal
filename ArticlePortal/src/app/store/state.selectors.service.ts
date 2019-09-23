import { createSelector, Store } from '@ngrx/store';

import { StateModel } from './state.model';
import { Observable } from 'rxjs';
import { User } from '../core/user.model';
import { Injectable } from '@angular/core';
import { Article } from '../core/article.model';

export const users = (state: StateModel) => state.users;
export const articles = (state: StateModel) => state.articles;


export const selectAllUsers = createSelector(
  users, (u) => u
);


@Injectable()
export class SelectorsService {

  constructor(private store: Store<StateModel>) { }

  selectAllUsers(): Observable<User[]> {
    return this.store.select(users);
  }

  selectAllArticles(): Observable<Article[]> {
    return this.store.select(articles);
  }

}
