import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesResponse } from 'src/app/types/games-response';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-logo [logoWidth]="70" [logoHeight]="70"></app-logo>
    <h2>Latest news</h2>
    <app-news-list [perPage]="NewsPerPage"></app-news-list>
    <button [routerLink]="['/news']" mat-flat-button color="primary">More news</button>
    <h2>Latest game results</h2>
    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of (lastGames | async)?.data" [game]="game"></app-game-list-item>
    </mat-list>

    <button [routerLink]="['/games']" mat-flat-button color="primary">All game results</button>
    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  introText: string = 'Check last NBA scores, stay update about teams and players';
  NewsPerPage: number = 3;
  lastGames: Observable<GamesResponse>;
  
  constructor(private games : GamesService) { 
    this.lastGames = this.games.getLastGames();
  }
}
