import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRvModel, SpecialiteModel, StatutDemandeModel } from '../../models/demande.models';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
   title: string = "Liste des demandes de rendez-vous";
   demandes:DemandeListRvModel[] = [
    {
      id: 1,
      dateDemande:"2024-07-01", 
      statut: StatutDemandeModel.EN_ATTENTE,
      heure: "10:00",
      specialite: SpecialiteModel.PEDIATRIE
    },
    {
      id: 2,
      dateDemande: "2024-07-05", 
      statut: StatutDemandeModel.ACCEPTER,
      heure: "14:00",
      specialite: SpecialiteModel.DERMATOLOGIE
    },
    {
      id: 3,
      dateDemande: "2024-07-10", 
      statut: StatutDemandeModel.REFUSER,
      heure: "09:00",
      specialite: SpecialiteModel.CARDIOLOGIE
      
    }
  ];
 
}
