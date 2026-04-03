import { Routes } from "@angular/router";
import { PrivateComponent } from "../private.component";
import { isConnectGuard } from "src/app/core/guards/is-connect.guard";
import { demandeResolver } from "../demande-rv/resolver/demande.resolver";
import { rvResolver } from "../demande-rv/resolver/rv.resolver";

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
                loadComponent: () => import('../demande-rv/form-demande/form-demande.component').then(m => m.FormDemandeComponent),
               

            }

            , {
                path: 'list-demande',
                loadComponent: () => import('../demande-rv/list-demande/list-demande.component').then(m => m.ListDemandeComponent),
                resolve: {
                    demandes: demandeResolver
                }
                
            }

            ,
            {
                path: 'list-rv',
                loadComponent: () => import('../demande-rv/demande-rv.component').then(m => m.DemandeRvComponent),
                resolve: {
                    rv: rvResolver
                }
               


            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
        ]
    }
]