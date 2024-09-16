import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@/shared/components/menu-header/menu-header.component')
    }
];
