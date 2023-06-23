import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
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
export class LatestScoresComponent implements OnInit, OnChanges {
  @Input() perPage?: number;
  lastGames: Observable<GamesResponse>;
  constructor(private api: ApiService) {
    this.lastGames = api.getLatestGames$(this.perPage);
  }

  ngOnInit(): void {
    console.log('inside ngOnInit...')
    console.log('perPage:', this.perPage);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside ngOnChanges...')
    console.log(changes)
  }


}
