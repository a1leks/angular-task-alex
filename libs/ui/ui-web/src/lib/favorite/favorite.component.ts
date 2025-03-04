import { ChangeDetectionStrategy, Component, input, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'lib-favorite',
    imports: [CommonModule, MatIconModule, MatTooltipModule],
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
