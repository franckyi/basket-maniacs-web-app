import { Component } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-latest-scores',
  template: `
    <h1 class="section-heading">Latest results</h1>
    <mat-card class="card--rounded latest-scores">
        <mat-card-content>
            <ul class="results__list">
                <app-latest-score-item *ngFor="let score of (latestScoresItems | async)?.data" [score]="score"></app-latest-score-item>
            </ul>
        </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./latest-scores.component.scss']
})
export class LatestScoresComponent {

  latestScoresItems: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.latestScoresItems = api.getLatestGames$(10);
  }

}
