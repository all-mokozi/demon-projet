import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListResponseModel, DemandeRVFilterModel } from '../../models/demande.models';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }
  public  getDemandesRV(filter:DemandeRVFilterModel):DemandeListResponseModel{
    let demandes = [...MOCK_DEMANDES];


    if(filter.statut){
      demandes = demandes.filter(d => d.statut === filter.statut);
    }
    if(filter.specialite){
      demandes = demandes.filter(d => d.specialite === filter.specialite);
    }
    const page = filter.page || 1;
    const size = filter.size || environment.limit|| 5;
    //page1 => debut=0, fin=5 positions 0,1,2,3,4 [0,5[
    //page2 => debut=5, fin=10 positions 5,6,7,8,9 [5,10[
    //page3 => debut=10, fin=15 positions 10,11,12,13,14 [10,15[
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(demandes.length / size);
    // const pages:number[] = [];
    // for(let i=1; i<=totalPages; i++){
    //   pages.push(i);
    // }
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);
    const demandesBypage = demandes.slice(startIndex, endIndex);
    
    
    return {
      data: demandesBypage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    };
  }
        
}
