import { createAction, props } from '@ngrx/store';
import { User } from '../core/user.model';

export const loadUsers = createAction(
  '[Load users] Load users from API',
  props<{ users: User[] }>()
);

export const loadArticlesByUser = createAction(
    '[Load articles] Load articles by user id.',
    props<{ id: number }>()
);
