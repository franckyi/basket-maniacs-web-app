import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {PlayersResponse} from "../../API/players-response";
import {Player} from "../../API/players";

@Component({
  selector: 'app-player-of-day',
  templateUrl: './player-of-day.component.html',
  styleUrls: ['./player-of-day.component.scss']
})
export class PlayerOfDayComponent implements OnInit {
  @Input() player?: Player;

  player$: Observable<PlayersResponse>;

  constructor(private api: ApiService) {
    this.player$ = api.getPlayers();
   }

  ngOnInit(): void {
  }

}
