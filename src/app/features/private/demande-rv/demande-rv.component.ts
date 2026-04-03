import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { RVFilterModel, RVListResponseModel } from '../models/RV.models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demande-rv',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './demande-rv.component.html',
  styleUrl: './demande-rv.component.css'
})
export class DemandeRvComponent implements OnInit {
  RvResponse?:RVListResponseModel
  subscription$?:Subscription;

  filter:RVFilterModel= {
       specialite:'',
       statut: 'Acceptée'
     }
  constructor(private route:ActivatedRoute,private cdr:ChangeDetectorRef) { }
  private loadRVDemandes(): void {
 this.subscription$ = this.route.data.subscribe({
      next: (data) => {
        this.RvResponse = data['rv'] as RVListResponseModel;
        console.log('Loaded RV:', this.RvResponse);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error loading RV:', err);
      },
      complete: () => {   console.log('Finished loading RV');
      }

    })
   
 
  }
   ngOnInit():void {
    this.loadRVDemandes();}


  }

