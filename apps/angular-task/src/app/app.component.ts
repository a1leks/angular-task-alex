import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentWrapperComponent, NavbarComponent } from '@angular-task/ui-web';

@Component({
    imports: [RouterModule, ContentWrapperComponent, NavbarComponent],
    selector: 'crx-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

    title = 'angular-task';

}
