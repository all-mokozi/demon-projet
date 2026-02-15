import { Routes } from '@angular/router';

import { RvComponent } from './features/private/rv/rv.component';
import { ListDemandeComponent } from './features/private/demande-rv/list-demande/list-demande.component';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { FormDemandeComponent } from './features/private/demande-rv/form-demande/form-demande.component';
import { PatientComponent } from './features/public/patient/patient.component';
import { LoginComponent } from './features/public/login/login.component';
import { PublicComponent } from './features/public/public.component';
import { PrivateComponent } from './features/private/private.component';

export const routes: Routes = [
    // private route
{
    path: 'private',
    loadChildren: () => import('./features/private/routes/private.routes').then(m => m.privateRoutes)
}
    
   
    // public route
        ,    {
            path: 'public',
            loadChildren: () => import('./features/public/routes/public.routes').then(m => m.publicRoutes)
        }  
    
   
    ,{
        path: '**',
        redirectTo: '/public/login'
    }
    
];
