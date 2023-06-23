import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header [heading]="heading"></app-header>
    <app-latest-scores [perPage]="perPage"></app-latest-scores>
    <button [routerLink]="['/scores']" mat-flat-button color="primary">All game scores</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heading: string = 'Check last NBA scores, stay update about teams and players.';
  perPage: number = 4;
  
  constructor() { }

  ngOnInit(): void {
  }

}
