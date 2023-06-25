import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-news-list [perPage]="NewsPerPage"></app-news-list>
    <button [routerLink]="['/news']" mat-flat-button color="accent">More news</button>
    <app-latest-scores [perPage]="gamesPerPage"></app-latest-scores>
    <button [routerLink]="['/scores']" mat-flat-button color="accent">All game scores</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'NBA News';
  introText: string = 'Check last NBA scores, stay update about teams and players.';
  gamesPerPage: number = 4;
  NewsPerPage: number = 3;
  
  constructor() { }

  ngOnInit(): void {
  }

}
