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

const selectUsersError = createSelector(
  selectCommonFeature,
  state => state.usersError
);

const selectArticlesError = createSelector(
  selectCommonFeature,
  state => state.articlesError
);

const selectUsersLoadingProgress = createSelector(
  selectCommonFeature,
  state => state.isLoading
);

const selectCurrentArticle = createSelector(
  selectCommonFeature,
  state => state.currentArticle
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

const selectArticleById = (id: number) => createSelector(
  selectAllArticles,
  (articles: Article[]) => {
    if (articles) {
      console.log(articles);
      console.log(id);

      const art = articles.filter(a => a.id == id);
      if (art && art.length > 0) {
        return art[0];
      } else {
        return null;
      }
    } else {
      return null;
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

  get selectUsersError$(): Observable<string> {
    return this.store.select(selectUsersError);
  }

  get selectArticlesError$(): Observable<string> {
    return this.store.select(selectArticlesError);
  }

  get selectUsersLoadingProgress$(): Observable<boolean> {
    return this.store.select(selectUsersLoadingProgress);
  }

  selectArticlesByUser$(id: number): Observable<Article[]> {
   return this.store.pipe(select(selectArticlesByUserId(id)));
  }

  selectArticleById$(id: number): Observable<Article | null> {
    return this.store.pipe(select(selectArticleById(id)));
   }

   get selectCurrentArticle$(): Observable<Article> {
     return this.store.select(selectCurrentArticle);
   }

}
