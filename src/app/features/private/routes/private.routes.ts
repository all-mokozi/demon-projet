import { Routes } from "@angular/router";
import { PrivateComponent } from "../private.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FormDemandeComponent } from "../demande-rv/form-demande/form-demande.component";
import { ListDemandeComponent } from "../demande-rv/list-demande/list-demande.component";
import { RvComponent } from "../rv/rv.component";

export const privateRoutes: Routes = [
    // private route
    {
    path: '',
    component: PrivateComponent,
    children: [
         {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
    },
         {

        path: 'dashboard',
        component: DashboardComponent
    }
    , {

        path: 'form-demande',
        component: FormDemandeComponent

    }

    , {
        path: 'list-demande',
        component: ListDemandeComponent
    }

    ,
    {
        path: 'rv',
        component: RvComponent

    }
    ]
    }
]