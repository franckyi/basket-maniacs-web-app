import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { PlayersResponse } from "../../types/players-response";
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.scss']
})
export class AllPlayersComponent {

  AllPlayersItems: Observable<PlayersResponse>;

  constructor(private players: PlayersService) {
    this.AllPlayersItems = players.getPlayers('');
  }

}
