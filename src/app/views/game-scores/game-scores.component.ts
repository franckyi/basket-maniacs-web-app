import { Component } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  template: `
    <app-header [heading]="heading"></app-header>
    <app-latest-scores></app-latest-scores>
  `,
  styleUrls: ['./game-scores.component.scss']
})
export class GameScoresComponent {
  heading: string = 'All games results';
  
  constructor() { }

  ngOnInit(): void {
  }

}
