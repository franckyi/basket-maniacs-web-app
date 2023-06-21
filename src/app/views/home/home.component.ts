import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header-home></app-header-home>
    <app-latest-scores></app-latest-scores>
    <button [routerLink]="['/scores']" mat-flat-button color="primary">All game scores</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
