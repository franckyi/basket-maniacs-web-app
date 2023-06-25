import { Component } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-latest-scores [perPage]="perPage"></app-latest-scores>
    <app-footer></app-footer>
  `,
  styleUrls: ['./game-scores.component.scss']
})
export class GameScoresComponent {
  title: string = 'Game scores';
  introText: string = 'All games results';
  perPage: number = 15;
  
  constructor() { }

  ngOnInit(): void {
  }

}
