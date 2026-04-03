import { Injectable } from '@angular/core';
import { DemandeListResponseModel, DemandeRVFilterModel } from '../../models/demande.models';
import { Observable } from 'rxjs/internal/Observable';
import { RVServiceInterface } from './interface/rv.interface.service';
import { RVFilterModel, RVListResponseModel } from '../../models/RV.models';
import { MOCK_RV } from '@mocks/rv.mock';
import { environment } from 'src/environments/environment.development';
import { delay, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RvService implements RVServiceInterface {

  constructor() { }
  getRVDemande(filter:RVFilterModel): Observable<RVListResponseModel> {
    let rv=[...MOCK_RV];
    if(filter.statut){
      rv = rv.filter(d => d.statut === filter.statut);
    }
    if(filter.specialite){
      rv = rv.filter(d => d.specialite === filter.specialite);
    }
    const page = filter.page || 1;
        const size = filter.size || environment.limit|| 5;
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;
        const totalPages = Math.ceil(rv.length / size);
     
        const pages = Array.from({length: totalPages}, (_, i) => i + 1);
        const rvBypage = rv.slice(startIndex, endIndex);
        



   return of({
      data: rvBypage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: rv.length,
      pages: pages,
      size: size
     }).pipe(delay(1000));

       

   
  }
}
