import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeRVFilterModel} from '../../models/demande.models';
import { DemandeService } from '../services/demande.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit,OnDestroy {
   title: string = "Liste des demandes de rendez-vous";
   demandesResponse?:DemandeListResponseModel;
   filter:DemandeRVFilterModel= {
     specialite:'',
     statut: 'En attente'
   }

   constructor(private demandeService: DemandeService) {
     
   }
   private loadDemandes(): void {
    this.demandesResponse = this.demandeService.getDemandesRV(this.filter);
   }
   ngOnDestroy(): void {
      // console.log("list demande component destroyed");
      alert("list demande component destroyed");
   }
   ngOnInit(): void {
      // this.demandes = MOCK_DEMANDES;
      this.loadDemandes(); 
   }
  
    onFilterStatutAndSpecialityChange(): void {
      this.loadDemandes();
    }
    onPaginate(page: number): void {
      this.filter.page = page;
      this.loadDemandes();
    }
    activePrecedent(): boolean {
      return (this.demandesResponse?.currentPage || 1) > 1;
    }
    activeSuivant(): boolean {
      return (this.demandesResponse?.currentPage || 1) < (this.demandesResponse?.totalPages || 1);
    }
 
}
