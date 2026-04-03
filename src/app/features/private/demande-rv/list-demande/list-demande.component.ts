import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DemandeListResponseModel, DemandeRVFilterModel} from '../../models/demande.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {   Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/shared/component/alert/alert.component';
import { BadgeComponent } from 'src/app/shared/component/badge/badge.component';
import { PaginationComponent } from 'src/app/shared/component/pagination/pagination.component';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,AlertComponent,BadgeComponent,PaginationComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit,OnDestroy {
   title: string = "Liste des demandes de rendez-vous";
   demandesResponse?:DemandeListResponseModel;
  subscription$?: Subscription;  
   filter:DemandeRVFilterModel= {
     specialite:'',
     statut: 'En attente'
   }

   constructor(private cdr: ChangeDetectorRef,private route:ActivatedRoute) {
     
   }
   private loadDemandes(): void {
    this.subscription$ = this.route.data.subscribe({
      next: (data) => {
        this.demandesResponse = data['demandes'] as DemandeListResponseModel;
        console.log('Loaded demandes:', this.demandesResponse);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error loading demandes:', err);
      },
      complete: () => {        console.log('Finished loading demandes');
      }

    })
    
   }
   ngOnDestroy(): void {
      // console.log("list demande component destroyed");
      alert("list demande component destroyed");
      
      this.subscription$?.unsubscribe();
   }
   ngOnInit(): void {
      // this.demandes = MOCK_DEMANDES;
      this.loadDemandes(); 
   }
  
    onFilterStatutAndSpecialityChange(): void {
      this.filter.page=1;
      this.loadDemandes();
    }
    onPaginate(page: number): void {
      this.filter.page = page;
      this.loadDemandes();
    }
 
 
}
