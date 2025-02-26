import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'lib-select',
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.css',
})
export class SelectComponent implements OnInit {

    default = input.required<string>();
    label = input<string>('Select');
    options = input.required<string[]>();

    selectChange = output<string>();

    selected = '';

    ngOnInit (): void {

        this.selected = this.default();

    }

    onSelectChange (value: string) {

        this.selected = value;
        this.selectChange.emit(value);

    }

}
