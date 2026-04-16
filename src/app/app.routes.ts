import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session-guard';
import { sessionGuardFuncional } from '@core/guards/session-guard-funcional';

export const routes: Routes = [
    {
        path: 'auth/login',
        loadComponent: () => import(`./modules/auth/auth-page/auth-page`).then(c => c.AuthPage)
    },
    {
        path:'tracks',
        loadComponent:() => import('@modules/tracks/tracks-page/tracks-page').then(c => c.TracksPage)
        //canActivate: [sessionGuardFuncional]
    },
    {
        path:'tracks/:category',
        loadComponent:() => import('@modules/tracks/tracks-page/tracks-page').then(c => c.TracksPage)
        //canActivate: [sessionGuardFuncional]
    },
    {
        path:'favorites',
        loadComponent:() => import('@modules/favorites/favorite-page/favorite-page').then(c => c.FavoritePage)
    },
    {
        path:'history',
        loadComponent:() => import('@modules/history/history-page/history-page').then(c => c.HistoryPage)
    },
    {
        path: '**',
        redirectTo: '/auth/login'
    }
];
