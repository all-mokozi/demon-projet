import { Routes } from "@angular/router";
import { PrivateComponent } from "../private.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FormDemandeComponent } from "../demande-rv/form-demande/form-demande.component";
import { ListDemandeComponent } from "../demande-rv/list-demande/list-demande.component";
import { RvComponent } from "../rv/rv.component";
import { isConnectGuard } from "src/app/core/guards/is-connect.guard";

export const privateRoutes: Routes = [
    // private route
    {
    path: '',
    component: PrivateComponent,
    canActivate: [isConnectGuard],
    canActivateChild: [isConnectGuard],
    children: [
     
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

        
    } ,   {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
    },
    ]
    }
]