import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { PatientComponent } from "../patient/patient.component";
import { PublicComponent } from "../public.component";

export const publicRoutes: Routes = [
    
        {
            path: '',
            component: PublicComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'login',
                    pathMatch: 'full'
                },
                {path: 'patient', 
                    loadComponent: () => import('../patient/patient.component').then(m => m.PatientComponent)
                   
                },
                {
                    path: 'login',
                    loadComponent: () => import('../login/login.component').then(m => m.LoginComponent)
                    
                },
            ]
              
        }  ]