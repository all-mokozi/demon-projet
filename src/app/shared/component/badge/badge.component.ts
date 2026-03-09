import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatutDemandeModel } from 'src/app/features/private/models/demande.models';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
 template: `
    <ng-container [ngSwitch]="statut">
          <span *ngSwitchCase="'Acceptée'" class="badge bg-success"> <i class="bi bi-check-circle"></i> {{statut}}</span>
          <span *ngSwitchCase="'Refusée'" class="badge bg-danger"><i class="bi bi-x-circle"></i> {{statut}}</span>
          <span *ngSwitchDefault class="badge bg-warning text-dark"> <i class="bi bi-clock"></i> {{statut}}</span>

 
    </ng-container>     `,
})
export class BadgeComponent {
  @Input() statut: StatutDemandeModel = 'Acceptée';

}
