import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './state.action';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from '../core/api.service';
import { Article } from '../core/article.model';

@Injectable()
export class StateEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {
  }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(actions.loadUsers),
    switchMap(() => this.apiService.getUsers().pipe(
      map(users => actions.loadUsersSuccess({ users })),
      catchError(err => of(actions.loadUsersFail({ error: JSON.stringify(err) })))
    ))
  );

  @Effect()
  loadArticles$: Observable<Action> = this.actions$.pipe(
    ofType(actions.loadArticlesByUser),
    mergeMap(action => this.apiService.getArticlesByAuthor(action.id).pipe(
      map(articles => actions.loadArticlesSuccess({ articles })),
      catchError(err => of(actions.loadArticlesFail({ error: JSON.stringify(err) })))
    ))
  );


}
