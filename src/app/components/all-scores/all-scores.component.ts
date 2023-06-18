import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-all-scores',
  template: `
    <app-header-scores></app-header-scores>
    <h1 class="section-heading">All game results</h1>

    <div class="pagination">
        <mat-icon aria-hidden="false" aria-label="Previous page" fontIcon="navigate_before"
          *ngIf="page > 1"
          (click)="goToPrevPage()"
        ></mat-icon>
          <span>{{ page }}</span>
        <mat-icon aria-hidden="false" aria-label="Next page" fontIcon="navigate_next"
          (click)="goToNextPage()"></mat-icon>
      </div>

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
  page: number = 0;
  latestScoresItems: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.latestScoresItems = api.getLatestGames$(100, this.page);
  }

  ngOnInit(): void {
  }

  goToPrevPage() {
    console.log('called goToPrevPage()');
    this.page -= 1;
    console.log('this.page', this.page);
    this.latestScoresItems = this.api.getLatestGames$(100, this.page);
  }

  goToNextPage() {
    console.log('called goToNextPage()');
    this.page += 1;
    console.log('this.page', this.page);
    this.latestScoresItems = this.api.getLatestGames$(100, this.page);
  }

}
