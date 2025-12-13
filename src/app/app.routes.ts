import { Routes } from '@angular/router';
import { QrComponent } from './pages/qr/qr.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'forms',
        loadComponent: () => import('./pages/forms/forms.component').then(m => m.FormsComponent)
    },
    {
        path: 'views',
        loadComponent: () => import('./pages/views/views.component').then(m => m.ViewsComponent)
    },
    {
        path: 'pokemons/page/:page',
        loadComponent: () => import('./pages/pokemons/pokemons.component')
    },
    {
        path: 'pokemons/:id',
        loadComponent: () => import('./pages/pokemon/pokemon.component').then(m => m.PokemonComponent)
    },
    {
        path: 'issues',
        loadComponent: () => import('./modules/issues/pages/issues-list/issues-list-page.component')
    },
    {
        path: 'issue/:number',
        loadComponent: () => import('./modules/issues/pages/issue/issue-page.component')
    },
    {
        path: 'qr',
        loadComponent: () => import('./pages/qr/qr.component').then(m => m.QrComponent)
    },
    {
        path: '**',
        redirectTo: () => {
            // const authService = inject(AuthService)

            return 'about';
        },
    },
];
