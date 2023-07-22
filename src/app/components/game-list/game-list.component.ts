import { Component } from '@angular/core';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {

  data: Game[] = [];
  loading: boolean = true;

  constructor() {}

  refreshData(data: Game[]): void {
    this.data = data;
    this.loading = false;
  }

}
