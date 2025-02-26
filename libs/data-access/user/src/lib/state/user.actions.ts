import { createAction, props } from '@ngrx/store';
import { User } from '@angular-task/users-data';

export const updateUser = createAction(
    '[Users] Update User',
    props<{ user: User }>()
);
