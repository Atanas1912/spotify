import { Routes } from '@angular/router';
import { AuthPage } from '@modules/auth/pages/auth-page/auth-page';
import { HomePage } from '@modules/home/pages/home-page/home-page';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import(`./modules/auth/pages/auth-page/auth-page`).then(c => c.AuthPage)
    },
    {
        path: '',
        component: HomePage,
        loadChildren: () => import(`./modules/home/home-module`).then(m => m.HomeModule)
    }
];
