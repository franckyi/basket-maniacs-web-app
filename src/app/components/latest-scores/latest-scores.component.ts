import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable, Subscription} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-latest-scores',
  template: `
    <h2 class="section-heading">Last games</h2>
    <mat-list class="results__list games">
      <app-latest-score-item class="results__item news" *ngFor="let score of (lastGames | async)?.data" [score]="score">
      </app-latest-score-item>
    </mat-list>
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
