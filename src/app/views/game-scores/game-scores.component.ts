import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  template: `
    <app-header [heading]="heading"></app-header>
  `,
  styleUrls: ['./game-scores.component.scss']
})
export class GameScoresComponent implements OnInit {
  heading: string = 'All games results';
  
  constructor() { }

  ngOnInit(): void {
  }

}
