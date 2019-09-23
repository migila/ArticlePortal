import { createAction, props } from '@ngrx/store';
import { User } from '../core/user.model';

export const loadUsers = createAction(
  '[Load users] Load users from API'
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
    '[Load articles] Load articles by user id.',
    props<{ id: number }>()
);
