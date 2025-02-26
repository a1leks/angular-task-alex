import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, Observable } from 'rxjs';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import { selectUsersState } from './state/user.selector';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UsersApiService {

    private http = inject(HttpClient);
    private store = inject(Store);

    getUsers (): Observable<User[]> {

        return combineLatest([
            this.http.get<User[]>(API_URL),
            this.store.select(selectUsersState)
        ]).pipe(map(([usersFromApi, usersFromStore]) =>
            usersFromApi.map((user) => ({
                ...user,
                isFavorite: usersFromStore.users[user.id]?.isFavorite ?? false
            }))));

    }

    getUser (id: number): Observable<User> {

        return combineLatest([
            this.http.get<User>(`${API_URL}/${id}`),
            this.store.select(selectUsersState)
        ]).pipe(map(([userFromApi, usersFromStore]) => ({
            ...userFromApi,
            isFavorite: usersFromStore.users[userFromApi.id]?.isFavorite ?? false
        })));

    }

}
