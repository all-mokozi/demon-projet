import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  RVFilterModel,
  RVListResponseModel,
} from '../../models/RV.models';
import {
  RV_SERVICE_TOKEN,
  RVServiceInterface,
} from '../services/interface/rv.interface.service';

export const rvResolver: ResolveFn<RVListResponseModel|undefined> = (route, state) => {

const rvService = inject(
  RV_SERVICE_TOKEN,
) as RVServiceInterface;
const filter: RVFilterModel = {
  specialite: '',
  statut: 'Acceptée',
};
return rvService.getRVDemande(filter);
  
};
