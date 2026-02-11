import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }
  public  gesterDemandesRV() {
    let demandes = MOCK_DEMANDES;
    return demandes;

  }
        
}
