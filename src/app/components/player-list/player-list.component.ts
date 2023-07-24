import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { PlayersResponse } from "../../types/players-response";
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {

  PlayerList: Observable<PlayersResponse>;

  constructor(private players: PlayersService) {
    this.PlayerList = players.getPlayers('');
  }

}
