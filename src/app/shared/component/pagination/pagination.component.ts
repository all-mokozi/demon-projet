import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input({ required: true }) currentPage: number = 1;

  @Input({ required: true }) pages: number[] = [];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onPaginate(page: number): void {
    if (page >= 1 && page <= this.pages.length) {
      this.pageChange.emit(page);
    }
  }

  get activePrecedent(): boolean {
    return (this.currentPage || 1) > 1;
  }
  get activeSuivant(): boolean {
    return (this.currentPage || 1) < (this.pages.length || 1);
  }
}
