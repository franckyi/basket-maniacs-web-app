import { Component } from '@angular/core';

@Component({
  selector: 'app-games-view',
  template: `
    <app-header [introText]="introText"></app-header>
    <app-game-list></app-game-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./games-view.component.scss']
})
export class GamesViewComponent {
  
  introText: string = 'A list of the historical game results by date. Click on last page to show the most recent results';
  pageSize: number = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
