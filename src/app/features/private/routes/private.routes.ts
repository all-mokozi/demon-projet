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
        
        canActivateChild: [isConnectGuard],
        children: [

            {

                path: 'dashboard',
                loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent)
                
            }
            , {

                path: 'form-demande',
                loadComponent: () => import('../demande-rv/form-demande/form-demande.component').then(m => m.FormDemandeComponent)

            }

            , {
                path: 'list-demande',
                loadComponent: () => import('../demande-rv/list-demande/list-demande.component').then(m => m.ListDemandeComponent)
                
            }

            ,
            {
                path: 'rv',
                loadComponent: () => import('../rv/rv.component').then(m => m.RvComponent)
               


            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
        ]
    }
]