import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './state.action';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class StateEffects {


  constructor(
    private actions$: Actions,
  ) {
  }


  // @Effect()
  // loadUsers$: Observable<Action> = this.actions$.pipe(
  //   ofType(actions.loadUsers),
  //   switchMap(() => this.companyService.getUsers().pipe(
  //     map(users => actions.loadUsersSuccess({ users })),
  //     catchError(err => of(actions.loadUsersFail({ error: JSON.stringify(err) })))
  //   ))
  // );



}
