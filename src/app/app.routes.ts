import { Routes } from '@angular/router';
import { AuthPage } from '@modules/auth/pages/auth-page/auth-page';
import { HomePage } from '@modules/home/pages/home-page/home-page';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthPage,
        loadChildren: () => import(`./modules/auth/auth-module`).then(m => m.AuthModule)
    },
    {
        path: '',
        component: HomePage,
        loadChildren: () => import(`./modules/home/home-module`).then(m => m.HomeModule)
    }
];
