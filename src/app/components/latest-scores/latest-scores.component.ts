import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable, Subscription} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-latest-scores',
  template: `
    <h2 class="section-heading">Games results</h2>
    <app-paginator [length]="10" [pageSize]="perPage"></app-paginator>
    <mat-list class="results__list">
      <app-latest-score-item *ngFor="let score of (gameList | async)?.data" [score]="score"></app-latest-score-item>
    </mat-list>
  `,
  styleUrls: ['./latest-scores.component.scss']
})
export class LatestScoresComponent implements OnInit, OnChanges, OnDestroy {
  @Input() perPage?: number;
  gameList: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.gameList = api.getLatestGames$(this.perPage);
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gameList = this.api.getLatestGames$(this.perPage);
  }

  ngOnDestroy(): void {
  }

}
