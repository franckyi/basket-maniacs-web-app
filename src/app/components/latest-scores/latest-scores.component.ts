import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable, Subscription} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-latest-scores',
  template: `
    <h1 class="section-heading">Latest game results</h1>
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
  // gamesSubscription: Subscription;

  constructor(private api: ApiService) {
    console.log('constructor...');
    console.log('perPage:', this.perPage);
    this.lastGames = api.getLatestGames$(this.perPage);
    // this.gamesSubscription = this.lastGames.subscribe();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges...')
    console.log(changes)
    this.lastGames = this.api.getLatestGames$(this.perPage);
    console.log('perPage:', this.perPage);
  }

  ngOnDestroy(): void {
    // this.gamesSubscription.unsubscribe();
    // console.log('unsubscribed...')
  }

}
