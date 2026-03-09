import { Routes } from '@angular/router';

import { isConnectGuard } from './core/guards/is-connect.guard';

export const routes: Routes = [
    // private route
    {
        path: 'private',
        canActivate: [isConnectGuard],
        loadChildren: () => import('./features/private/routes/private.routes').then(m => m.privateRoutes)
    }


    // public route
    , {
        path: 'public',
        loadChildren: () => import('./features/public/routes/public.routes').then(m => m.publicRoutes)
    }


    , {path: '', redirectTo: '/public', pathMatch: 'full'},
    {path: '**', redirectTo: '/public/login'}

];
