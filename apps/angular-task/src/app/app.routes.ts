import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'users', loadChildren: () => import('@angular-task/users').then((m) => m.routes) },
    { path: 'users/:id', loadChildren: () => import('@angular-task/user-profile').then((m) => m.routes) }
];
