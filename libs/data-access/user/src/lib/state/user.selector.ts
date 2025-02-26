import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './user.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUserById = (userId: number) =>
    createSelector(selectUsersState, (state) => state.users[userId] || null);
