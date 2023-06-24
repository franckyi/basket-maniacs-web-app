import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable, Subscription} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-latest-scores',
  template: `
    <h2 class="section-heading">Last results</h2>
    <mat-card class="card--rounded latest-scores">
      <mat-card-content>
        <ul class="results__list">
          <app-latest-score-item *ngFor="let score of (lastGames | async)?.data" [score]="score"></app-latest-score-item>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./latest-scores.component.scss']
})
export class LatestScoresComponent implements OnInit, OnChanges, OnDestroy {
  @Input() perPage!: number;
  lastGames: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.lastGames = api.getLatestGames$(this.perPage);
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lastGames = this.api.getLatestGames$(this.perPage);
  }

  ngOnDestroy(): void {
  }

}
