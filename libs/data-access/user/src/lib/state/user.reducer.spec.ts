import { usersReducer, initialState } from './user.reducer';
import { updateUser } from './user.actions';
import { User } from '@angular-task/users-data';

describe('Users Reducer', () => {

    it('should return the initial state', () => {

        const action = { type: 'Unknown' };
        const state = usersReducer(initialState, action);

        expect(state).toBe(initialState);

    });

    it('should update user in state when updateUser is dispatched', () => {

        const user: User = {
            id: 89,
            name: 'Leanne Graham 89',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        };

        const action = updateUser({ user });
        const state = usersReducer(initialState, action);

        expect(state.users[user.id]).toEqual(user);

    });

    it('should overwrite existing user when updateUser is dispatched with the same id', () => {

        const user1: User = {
            id: 89,
            name: 'Leanne Graham 89',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        };

        const user2: User = { ...user1, name: 'John Smith' };

        const stateAfterFirstUpdate = usersReducer(initialState, updateUser({ user: user1 }));
        const stateAfterSecondUpdate = usersReducer(stateAfterFirstUpdate, updateUser({ user: user2 }));

        expect(stateAfterSecondUpdate.users[user1.id]).toEqual(user2);

    });

});
