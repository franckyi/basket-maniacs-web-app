import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header [heading]="heading"></app-header>
    <app-news-list [perPage]="NewsPerPage"></app-news-list>
    <button [routerLink]="['/news']" mat-flat-button color="primary">More news</button>
    <app-latest-scores [perPage]="gamesPerPage"></app-latest-scores>
    <button [routerLink]="['/scores']" mat-flat-button color="primary">All game scores</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heading: string = 'Check last NBA scores, stay update about teams and players.';
  gamesPerPage: number = 4;
  NewsPerPage: number = 3;
  
  constructor() { }

  ngOnInit(): void {
  }

}
