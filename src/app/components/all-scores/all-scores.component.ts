import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-all-scores',
  template: `
    <app-header-scores></app-header-scores>
    <h1 class="section-heading">All game results</h1>
    <mat-card class="card--rounded results">
        <mat-card-content>
            <ul class="results__list">
                <app-latest-score-item *ngFor="let score of (latestScoresItems | async)?.data" [score]="score"></app-latest-score-item>
            </ul>
        </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./all-scores.component.scss']
})
export class AllScoresComponent implements OnInit {
  
  latestScoresItems: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.latestScoresItems = api.getLatestGames$(100);
  }

  ngOnInit(): void {
  }

}
