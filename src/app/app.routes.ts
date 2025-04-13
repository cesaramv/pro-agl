import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@/shared/components/menu-header/menu-header.component')
    },
    {
        path: 'forms',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    }
];
