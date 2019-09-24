import { Injectable } from '@angular/core';

import { createSelector, Store, createFeatureSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Article } from '../core/article.model';
import { StateModel } from './state.model';
import { User } from '../core/user.model';


const selectCommonFeature = createFeatureSelector<StateModel>('state');

const selectAllUsers = createSelector(
  selectCommonFeature,
  state => state.users
);

const selectAllArticles = createSelector(
  selectCommonFeature,
  state => state.articles
);

const selectArticlesByUserId = (id: number) => createSelector(
  selectAllArticles,
  (articles: Article[]) => {
    if (articles) {
      return articles.filter(a => a.user_id === id);
    } else {
      return [];
    }
  }
);

@Injectable({ providedIn: 'root' })
export class StateSelectorsService {

  constructor(private store: Store<StateModel>) { }

  get selectAllUsers$(): Observable<User[]> {
    return this.store.select(selectAllUsers);
  }

  get selectAllArticles$(): Observable<Article[]> {
    return this.store.select(selectAllArticles);
  }

  selectArticlesByUser$(id: number): Observable<Article[]> {
   return this.store.pipe(select(selectArticlesByUserId(id)));
  }

}
