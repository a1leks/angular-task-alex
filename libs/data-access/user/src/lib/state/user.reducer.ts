import { createReducer, on } from '@ngrx/store';
import { updateUser } from './user.actions';
import { User } from '@angular-task/users-data';

export interface UsersState {
    users: Record<number, User>; // number - id
}

export const initialState: UsersState = {
    users: {},
};

export const usersReducer = createReducer(
    initialState,
    on(updateUser, (state, { user }) => ({
        ...state,
        users: { ...state.users, [user.id]: user },
    }))
);
