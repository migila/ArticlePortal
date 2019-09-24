import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './state.action';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from '../core/api.service';

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
  loadUserArticles$: Observable<Action> = this.actions$.pipe(
    ofType(actions.loadUsersSuccess),
    map(action => action.users.map(user => user.id).slice(0, 5)),
    switchMap((usersIds) => {
      return this.apiService.getArticlesByAuthors(usersIds).pipe(
        map(articles => actions.loadArticlesSuccess( { articles } )),
        catchError(err => of(actions.loadArticlesFail( { error: JSON.stringify(err) })))
      );
    })
  );

}
