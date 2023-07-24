import { Component, Input } from '@angular/core';
import { Player } from "../../../types/player";

@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.scss']
})
export class PlayerListItemComponent {

  @Input() player?: Player;
  
  constructor() {}

}
