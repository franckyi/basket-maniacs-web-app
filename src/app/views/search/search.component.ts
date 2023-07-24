import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeFiltersService } from './services/change-filters.service';
import { Filter } from './services/filter';

@Component({
  selector: 'app-search',
  template: `
    <app-header [title]="title"></app-header>
    <app-search-filters class="search__filters" [currentFilter]="currentFilter$"></app-search-filters>
    <app-search-player class="search__form" *ngIf="(currentFilter$ | async) == 'player'"></app-search-player>
    <app-search-team class="search__form"  *ngIf="(currentFilter$ | async) == 'team'"></app-search-team>
    <app-search-game class="search__form"  *ngIf="(currentFilter$ | async) == 'game'"></app-search-game>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'Search';
  currentFilter$: Observable <Filter>;   

  constructor(private filterService: ChangeFiltersService) {
    this.currentFilter$ = filterService.getCurrentFilter$();
     }

  ngOnInit(): void {
  }

}
