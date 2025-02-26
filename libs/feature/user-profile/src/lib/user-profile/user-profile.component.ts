import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { updateUser, User, UsersApiService } from '@angular-task/users-data';
import { ActivatedRoute } from '@angular/router';
import { delay, take } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FavoriteComponent } from '@angular-task/ui-web';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';

@Component({
    selector: 'lib-user-profile',
    imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        FavoriteComponent,
        MatProgressSpinnerModule,
    ],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {

    private store = inject(Store);

    private api = inject(UsersApiService);
    private route = inject(ActivatedRoute);
    user = signal<User | null>(null);
    loading = signal<boolean>(false);

    ngOnInit (): void {

        this.loading.set(true);
        const id = Number(this.route.snapshot.paramMap.get('id'));
        // The delay is just to demonstrate the loader.
        this.api.getUser(id)
        .pipe(delay(500), take(1))
        .subscribe({
            next: (user) => {

                this.user.set(user);
                this.loading.set(false);

            },
            error: (e) => {

                console.error(e);
                this.loading.set(false);
                this.user.set(null);

            },
            complete: () => {

                this.loading.set(false);

            },

        });

    }

    changeFavoriteHandler (isFavorite: boolean): void {

        const u: User | null = this.user();
        if (!u) {

            console.warn('Emty user update attempt');
            return;

        }

        const updated = { ...u, isFavorite };

        console.log('Update from details for ', u.id, isFavorite);
        this.store.dispatch(updateUser({ user: updated }));
        this.user.set(updated);

    }

}
