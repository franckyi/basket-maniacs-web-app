import { Component, OnInit } from '@angular/core';
import { ChangeFiltersService } from '../services/change-filters.service';
import { Filter } from '../services/filter';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  activateFilterPlayer() {
    this.filterService.setFilter(Filter.player) ;
  }

  activateFilterTeam() {
    this.filterService.setFilter(Filter.team) ;
  }

    activateFilterGame() {
    this.filterService.setFilter(Filter.game) ;
  }

  activateFilterNews() {
    this.filterService.setFilter(Filter.news) ;
  }

  constructor(private filterService: ChangeFiltersService) { }

  ngOnInit(): void {
  }

}