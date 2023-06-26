import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="main-nav">
      <div [routerLink] = "['']" class="main-nav__link" mat-icon-button aria-label="Go to Home">
          <mat-icon>home</mat-icon>
          <span class="main-nav__label">Home</span>
      </div>
      <div [routerLink]= "['/search']" mat-icon-button class="main-nav__link" aria-label="Go to search page">
          <mat-icon>search</mat-icon>
          <span class="main-nav__label">Search</span>
      </div>
      <div [routerLink]="['/news']" mat-icon-button class="main-nav__link" aria-label="Read News">
          <mat-icon>newspaper</mat-icon>
          <span class="main-nav__label">News</span>
      </div>
      <div [routerLink] = "['/games']" mat-icon-button class="main-nav__link" aria-label="Go to Scoreboard">
          <mat-icon>sports_basketball</mat-icon>
          <span class="main-nav__label">Scores</span>
      </div>
      <div [routerLink] = "['/teams']" mat-icon-button class="main-nav__link" aria-label="Go to Teams page">
          <mat-icon>groups</mat-icon>
          <span class="main-nav__label">Teams</span>
      </div>
    </nav>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
