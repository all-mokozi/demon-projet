import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  template: `<div class="alert alert-info" role="alert text-center">
             <strong>{{message}}</strong> 
             </div>
`,
  styles: [

  ]})
export class AlertComponent {
  @Input({required:true}) message: string = ''
  @Input() type: 'success' | 'danger' | 'info' = 'info';
  

}
