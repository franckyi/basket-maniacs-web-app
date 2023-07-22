import { Component, Input } from '@angular/core';
import { Game } from "../../../types/game";

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent {

  @Input() game?: Game;

  constructor() {}

}
