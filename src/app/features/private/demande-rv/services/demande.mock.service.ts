import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListResponseModel, DemandeRVFilterModel } from '../../models/demande.models';
import { environment } from '../../../../../environments/environment.development';

import { delay, Observable, of } from 'rxjs';
import { DemandedServiceInterface } from './interface/demande.interface.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeMockService implements DemandedServiceInterface {

  constructor() { }
  public  getDemandesRV(filter:DemandeRVFilterModel):Observable<DemandeListResponseModel>{
    let demandes = [...MOCK_DEMANDES];


    if(filter.statut){
      demandes = demandes.filter(d => d.statut === filter.statut);
    }
    if(filter.specialite){
      demandes = demandes.filter(d => d.specialite === filter.specialite);
    }
    const page = filter.page || 1;
    const size = filter.size || environment.limit|| 5;
   
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
   
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);
    const demandesBypage = demandes.slice(startIndex, endIndex);
    
    
    return of({
      data: demandesBypage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    }).pipe(delay(5000));
  }
        
}
