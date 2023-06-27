import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-all-scores',
  template: `
    <app-header [introText]="introText"></app-header>
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
          <app-game-list-item app-game-list-item *ngFor="let game of (lastResults | async)?.data" [game]="game"></app-game-list-item>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./all-scores.component.scss']
})
export class AllScoresComponent implements OnInit {
  introText: string = 'All game results';
  page: number = 1;
  lastResults: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.lastResults = api.getGames$(100, this.page);
  }

  ngOnInit(): void {
  }

  goToPrevPage() {
    console.log('called goToPrevPage()');
    this.page -= 1;
    console.log('this.page', this.page);
    this.lastResults = this.api.getGames$(100, this.page);
  }

  goToNextPage() {
    console.log('called goToNextPage()');
    this.page += 1;
    console.log('this.page', this.page);
    this.lastResults = this.api.getGames$(100, this.page);
  }

}
