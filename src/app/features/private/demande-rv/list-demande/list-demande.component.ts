import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRvModel} from '../../models/demande.models';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
   title: string = "Liste des demandes de rendez-vous";
   demandes:DemandeListRvModel[]= [];

   constructor(private demandeService: DemandeService) {
     
   }
   ngOnInit(): void {
      // this.demandes = MOCK_DEMANDES;
      this.demandes = this.demandeService.gesterDemandesRV(); 
   }
      
 
}
