import { Component, OnInit } from '@angular/core';
import { ChangeFiltersService } from '../services/change-filters.service';
import { Filter } from '../services/filter';

@Component({
  selector: 'app-search-filters',
  template: `
    <nav class="search-nav">
      <div class="search-nav__filter">
        <div class="search-nav__category">
          <a (click)="activateFilterPlayer()" >
              <mat-icon aria-hidden="false" aria-label="Search player" fontIcon="sports_handball"></mat-icon>
          </a>
          <span class="label">Players</span>
      </div>
      <div class="search-nav__category">
          <a (click)="activateFilterTeam()" >
              <mat-icon aria-hidden="false" aria-label="Search team" fontIcon="groups"></mat-icon>
          </a>
          <span class="label">Teams</span>
      </div>
      <div class="search-nav__category">
          <a (click)="activateFilterGame()">
              <mat-icon aria-hidden="false" aria-label="Search game" fontIcon="sports_basketball"></mat-icon>
          </a>
          <span class="label">Games</span>
        </div>
      </div>
    </nav>
  `,
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

  constructor(private filterService: ChangeFiltersService) { }

  ngOnInit(): void {
  }

}
