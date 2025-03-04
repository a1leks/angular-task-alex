import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { updateUser, User } from '@angular-task/users-data';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FavoriteComponent } from '@angular-task/ui-web';
import { Store } from '@ngrx/store';

@Component({
    selector: 'lib-user-item',
    imports: [CommonModule, RouterModule, MatCardModule, FavoriteComponent],
    templateUrl: './user-item.component.html',
    styleUrl: './user-item.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent {

    user = input.required<User>();
    userChange = output<User>();

    private store = inject(Store);

    changeFavoriteHandler (isFavorite: boolean): void {

        const updated: User = { ...this.user(), isFavorite };

        console.log('Update from item for ', this.user().id, isFavorite);
        this.store.dispatch(updateUser({ user: updated }));
        this.userChange.emit(updated);

    }

}
