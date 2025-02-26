import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UsersApiService } from '@angular-task/users-data';
import { take } from 'rxjs';
import { FilterComponent, SelectComponent } from '@angular-task/ui-web';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
    selector: 'lib-users',
    imports: [CommonModule, FilterComponent, SelectComponent, UserItemComponent],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {

    users = signal<User[]>([]);
    filteredUsers = signal<User[]>([]);

    private api = inject(UsersApiService);

    filterField: keyof User = 'name';
    filterValue = '';

    filterHandler (filteredUsers: User[]): void {

        this.filteredUsers.set(filteredUsers);

    }

    filterTypeChangeHandler (field: string): void {

        this.filterField = field as keyof User;
        this.filterValue = '';

    }

    ngOnInit (): void {

        this.api.getUsers().pipe(take(1)).subscribe((users) => this.users.set(users));

    }

}
