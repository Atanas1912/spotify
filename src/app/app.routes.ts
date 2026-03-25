import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import(`./modules/auth/auth-page/auth-page`).then(c => c.AuthPage)
    },
    {
        path: '',
        loadComponent: () => import(`./modules/home/home-page/home-page`).then(c => c.HomePage)
    },
    {
        path:'tracks',
        loadComponent:() => import('@modules/tracks/tracks-page/tracks-page').then(c => c.TracksPage)
    },
    {
        path:'favorites',
        loadComponent:() => import('@modules/favorites/favorite-page/favorite-page').then(c => c.FavoritePage)
    },
    {
        path:'history',
        loadComponent:() => import('@modules/history/history-page/history-page').then(c => c.HistoryPage)
    }
];
