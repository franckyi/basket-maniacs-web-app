import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Game} from "../../API/Game";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-player-of-day',
  templateUrl: './player-of-day.component.html',
  styleUrls: ['./player-of-day.component.scss']
})
export class PlayerOfDayComponent implements OnInit {
  latestScoresItems: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.latestScoresItems = api.getLastGame$();
   }

  ngOnInit(): void {
  }

}
