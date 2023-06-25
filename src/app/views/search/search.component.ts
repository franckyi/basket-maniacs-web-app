import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeFiltersService } from './services/change-filters.service';
import { Filter } from './services/filter';

@Component({
  selector: 'app-search',
  template: `
    <app-header></app-header>
    <mat-card class="filters">
      <app-search-filters [currentFilter]="currentFilter$"></app-search-filters>
    </mat-card>
    <app-search-player *ngIf="(currentFilter$ | async) == 'player'"></app-search-player>
    <app-search-team  *ngIf="(currentFilter$ | async) == 'team'"></app-search-team>
    <app-search-game  *ngIf="(currentFilter$ | async) == 'game'"></app-search-game>
    <app-footer></app-footer>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  currentFilter$: Observable <Filter>;   

  constructor(private filterService: ChangeFiltersService) {
    this.currentFilter$ = filterService.getCurrentFilter$();
     }

  ngOnInit(): void {
  }

}
