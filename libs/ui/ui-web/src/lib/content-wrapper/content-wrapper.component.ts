import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-content-wrapper',
    imports: [CommonModule],
    templateUrl: './content-wrapper.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentWrapperComponent {}
