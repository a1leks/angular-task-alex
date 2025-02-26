import { Component, input, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'lib-favorite',
    imports: [CommonModule, MatIconModule, MatTooltipModule, MatIconButton],
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.css',
})
export class FavoriteComponent implements OnInit {

    isFavorite = input<boolean>(false);
    favoriteSignal = signal<boolean>(false);

    changeFavorite = output<boolean>();

    toggleFavorite (e: MouseEvent) {

        e.stopPropagation();
        this.favoriteSignal.set(!this.favoriteSignal());
        this.changeFavorite.emit(this.favoriteSignal());

    }

    ngOnInit (): void {

        this.favoriteSignal.set(this.isFavorite()); // init form input

    }

}
