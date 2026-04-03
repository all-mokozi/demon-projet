import { ResolveFn } from '@angular/router';
import {
  DemandeListResponseModel,
  DemandeRVFilterModel,
} from '../../models/demande.models';

import { inject } from '@angular/core';
import {
  DEMANDE_SERVICE_TOKEN,
  DemandedServiceInterface,
} from '../services/interface/demande.interface.service';

export const demandeResolver: ResolveFn<
  DemandeListResponseModel | undefined
> = (route, state) => {
  const demandeService = inject(
    DEMANDE_SERVICE_TOKEN,
  ) as DemandedServiceInterface;
  const filter: DemandeRVFilterModel = {
    specialite: '',
    statut: 'En attente',
  };
return demandeService.getDemandesRV(filter);

  
};
