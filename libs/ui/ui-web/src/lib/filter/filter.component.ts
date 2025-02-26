import { Component, input, OnChanges, OnDestroy, OnInit, output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, Subject } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'lib-filter',
    imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css',
})
export class FilterComponent<T> implements OnInit, OnDestroy, OnChanges {

    items = input.required<T[]>();
    key = input.required<keyof T>(); // Key of an item in this.items used for filtering
    placeholder = input<string>('Type to filter');
    filterValue = input<string>('');

    search = '';

    filter = output<T[]>();

    maxValueLength = 100;
    filterDebounceMs = 400;

    private debounceFilter$ = new Subject<string>();

    filterInputHandler (e: Event): void {

        const target = e.target as HTMLInputElement;
        this.debounceFilter$.next(target.value);

    }

    ngOnInit (): void {

        this.debounceFilter$
        .pipe(debounceTime(this.filterDebounceMs))
        .subscribe((value: string) => {

            const filterValue = value.toLowerCase();
            const filterBy = (item: T) => (item[this.key()] as string).toLowerCase().includes(filterValue);
            const filtered = this.items().filter(filterBy);
            this.filter.emit(filtered);

        });

        this.debounceFilter$.next('');

    }

    ngOnChanges (changes: SimpleChanges): void {

        if (changes['key']) {

            this.search = this.filterValue();
            this.debounceFilter$.next(this.filterValue());

        }

    }

    ngOnDestroy (): void {

        this.debounceFilter$.complete();

    }

}
