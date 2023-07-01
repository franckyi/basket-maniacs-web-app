import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/API/api.service';
import { GamesResponse } from 'src/app/API/games-response';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>

    <app-news-list [perPage]="NewsPerPage"></app-news-list>
    <button [routerLink]="['/news']" mat-flat-button color="accent">More news</button>

    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of (lastGames | async)?.data" [game]="game"></app-game-list-item>
    </mat-list>
    <button [routerLink]="['/games']" mat-flat-button color="accent">All game results</button>

    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'NBA News';
  introText: string = 'Check last NBA scores, stay update about teams and players';
  NewsPerPage: number = 3;

  lastGames: Observable<GamesResponse>;
  
  constructor(private api: ApiService) { 
    this.lastGames = this.api.getLastGames();
  }

  ngOnInit(): void {
    
  }

}
