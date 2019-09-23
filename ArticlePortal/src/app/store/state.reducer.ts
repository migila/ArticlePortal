import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

import { loadUsersSuccess } from './state.action';
import { StateModel, initState } from './state.model';

const stateReducerConst = createReducer(
    initState,
    // základné pravidlo - používam aktuálnu verziu VS Code a TypeScriptu!!! Nie verziu pre pamätníkov...
    on(loadUsersSuccess, (state , payload) => ({ ...state, users: payload.users }))
  );

export function stateReducer(state: StateModel | undefined, action: Action) {
  return stateReducerConst(state, action);
}
