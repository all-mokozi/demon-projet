import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DEMANDE_SERVICE_TOKEN } from './features/private/demande-rv/services/interface/demande.interface.service';
import { DemandeMockService } from './features/private/demande-rv/services/demande.mock.service';
import { SecurityMockService } from './core/service/security.service.mock';
import { SECURITY_SERVICE_TOKEN } from './core/service/Interface/security.interface.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     {
        provide: DEMANDE_SERVICE_TOKEN,
        useClass:DemandeMockService
     },
     {
        provide: SECURITY_SERVICE_TOKEN ,
        useClass:SecurityMockService
     }
    
    ]
};
