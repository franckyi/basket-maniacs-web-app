import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  template: `
    <app-header [introText]="introText"></app-header>
    <app-game-list></app-game-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  introText: string = 'Jump to the end to get the latest results';
  pageSize: number = 10;
  
  constructor() {}
}
