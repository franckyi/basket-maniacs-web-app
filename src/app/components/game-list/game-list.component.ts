import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable, Subscription} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    <app-paginator [meta]="meta" [pageSize]="perPage"></app-paginator>
    <mat-list class="results__list">
      <app-game-list-item *ngFor="let score of (gameList | async)?.data" [score]="score"></app-game-list-item>
    </mat-list>
  `,
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() perPage?: number;

  gameList?: Observable<GamesResponse>;
  meta?: object;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gameList = this.api.getGames$(this.perPage);
    this.meta = this.gameList.subscribe( response => response.meta);
  }

  ngOnDestroy(): void {
  }

}
