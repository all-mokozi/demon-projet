import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RvComponent } from './features/rv/rv.component';
import { FormDemandeComponent } from './features/demande-rv/form-demande/form-demande.component';
import { ListDemandeComponent } from './features/demande-rv/list-demande/list-demande.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
    ,{
        path: 'dashboard',
        component: DashboardComponent

    }
    ,{
       
        path: 'form-demande',
        component: FormDemandeComponent

    }
    ,{
        path: 'list-demande',
        component: ListDemandeComponent
    }

    ,
    {
        path: 'rv',
        component: RvComponent

    }
];
