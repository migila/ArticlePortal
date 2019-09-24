import { createAction, props } from '@ngrx/store';
import { User } from '../core/user.model';
import { Article } from '../core/article.model';

export const loadUsers = createAction(
  '[Load users] Load users from API'
);

export const loadUsersStart = createAction(
  '[Load users start] Load users from API start'
);

export const loadUsersSuccess = createAction(
  '[Load users success] Load users from API success',
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction(
  '[Load users fail] Load users from API fail',
  props<{ error: any }>()
);

export const loadArticlesByUser = createAction(
  '[Load articles] Load articles by user id.'
);

export const loadArticlesSuccess = createAction(
  '[Load articles success] Load articles from API success',
  props<{ articles: Article[] }>()
);

export const loadArticlesFail = createAction(
  '[Load articles fail] Load articles from API fail',
  props<{ error: any }>()
);
