import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

import { loadUsersSuccess, loadArticlesSuccess, loadUsersStart, loadUsersFail, setCurrentArticleSuccess } from './state.action';
import { StateModel, initState } from './state.model';

const stateReducerConst = createReducer(
    initState,
    on(loadUsersStart, (state) => ({ ...state, users: [], usersError: '', isLoading: true, articles: [], isLoadingArticles: true })),
    on(loadUsersSuccess, (state , payload) => ({ ...state, users: payload.users, usersError: '', isLoading: false })),
    on(loadUsersFail, (state, payload) => ({ ...state, users: [], usersError: payload.error, isLoading: false })),
    on(loadArticlesSuccess, (state, payload) => ({ ...state, articles: [...state.articles, ...payload.articles]})),
    on(setCurrentArticleSuccess, (state, payload) => ({ ...state, currentArticle: payload.currentArticle }))
  );

export function stateReducer(state: StateModel | undefined, action: Action) {
  return stateReducerConst(state, action);
}
