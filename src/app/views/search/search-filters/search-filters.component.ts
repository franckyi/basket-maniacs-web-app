import { Component, Input } from '@angular/core';
import { ChangeFiltersService } from '../services/change-filters.service';
import { Filter } from '../services/filter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent {

  @Input() currentFilter?: Observable <Filter>;

  activateFilterPlayer(): void {
    this.filterService.setFilter(Filter.player) ;
  }

  activateFilterTeam(): void {
    this.filterService.setFilter(Filter.team) ;
  }

    activateFilterGame(): void {
    this.filterService.setFilter(Filter.game) ;
  }

  constructor(private filterService: ChangeFiltersService) {}

}
