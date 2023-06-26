import { Component } from '@angular/core';

@Component({
  selector: 'app-games-view',
  template: `
    <app-header [introText]="introText"></app-header>
    <app-game-list [perPage]="perPage"></app-game-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./games-view.component.scss']
})
export class GamesViewComponent {
  // title: string = 'Game scores';
  introText: string = 'A list of the most recent game results by date. Navigate the results to see historical data.';
  perPage: number = 15;
  
  constructor() { }

  ngOnInit(): void {
  }

}
