import { Injectable } from '@angular/core';

import { createSelector, Store, createFeatureSelector } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { Article } from '../core/article.model';
import { StateModel } from './state.model';
import { User } from '../core/user.model';
import { map } from 'rxjs/operators';


const selectCommonFeature = createFeatureSelector<StateModel>('state');

const selectAllUsers = createSelector(
  selectCommonFeature,
  state => state.users
);

const selectAllArticles = createSelector(
  selectCommonFeature,
  state => state.articles
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
    return this.selectAllArticles$.pipe(
      map(articles => {
          const newArticles: Article[] = articles.filter(
            x => x.user_id === id
          );
          return newArticles;
        }
      )
    );
  }

}
