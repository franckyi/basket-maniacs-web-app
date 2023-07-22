import { Component, Input } from '@angular/core';
import { Player } from "../../../types/player";

@Component({
  selector: 'app-all-players-item',
  templateUrl: './all-players-item.component.html',
  styleUrls: ['./all-players-item.component.scss']
})
export class AllPlayersItemComponent {

  @Input() player?: Player;
  
  constructor() {}

}
