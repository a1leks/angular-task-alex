import { updateUser, User } from '@angular-task/users-data';

describe('Users Actions', () => {

    it('should create an updateUser action with the correct payload', () => {

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

        expect(action).toEqual({
            type: '[Users] Update User',
            user
        });

    });

});
