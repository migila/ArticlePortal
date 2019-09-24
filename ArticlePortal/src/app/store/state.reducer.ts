import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

import { loadUsersSuccess, loadArticlesSuccess } from './state.action';
import { StateModel, initState } from './state.model';

const stateReducerConst = createReducer(
    initState,
    on(loadUsersSuccess, (state , payload) => ({ ...state, users: payload.users })),
    on(loadArticlesSuccess, (state, payload) => ({ ...state, articles: [...state.articles, ...payload.articles]}))
  );

export function stateReducer(state: StateModel | undefined, action: Action) {
  return stateReducerConst(state, action);
}
