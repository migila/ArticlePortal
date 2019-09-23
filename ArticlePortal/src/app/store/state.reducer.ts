import { createReducer, on } from '@ngrx/store';
import { StateModel, initState } from './state.model';
import { Action } from '@ngrx/store';

import { loadUsers, loadArticlesByUser } from './state.action';

const stateReducerConst = createReducer(
    initState,
    // základné pravidlo - používam aktuálnu verziu VS Code a TypeScriptu!!! Nie verziu pre pamätníkov...
    on(loadUsers, (state , payload) => ({ ...state, users: payload.users }))
  );

export function stateReducer(state: StateModel | undefined, action: Action) {
  return stateReducerConst(state, action);
}
