import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-news-list [perPage]="NewsPerPage"></app-news-list>
    <button [routerLink]="['/news']" mat-flat-button color="primary">More news</button>
    <app-game-list [perPage]="gamesPerPage"></app-game-list>
    <button [routerLink]="['/games']" mat-flat-button color="primary">See more results</button>
    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'NBA News';
  introText: string = 'Check last NBA scores, stay update about teams and players';
  gamesPerPage: number = 5;
  NewsPerPage: number = 3;
  
  constructor() { }

  ngOnInit(): void {
  }

}
