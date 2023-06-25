import { Component } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  template: `
    <app-header [introText]="introText"></app-header>
    <app-latest-scores [perPage]="perPage"></app-latest-scores>
    <app-footer></app-footer>
  `,
  styleUrls: ['./game-scores.component.scss']
})
export class GameScoresComponent {
  // title: string = 'Game scores';
  introText: string = 'A list of the most recent game results by date. Navigate the results to see historical data.';
  perPage: number = 15;
  
  constructor() { }

  ngOnInit(): void {
  }

}
