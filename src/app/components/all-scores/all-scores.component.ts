import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Game} from "../../API/Game";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-all-scores',
  templateUrl: './all-scores.component.html',
  styleUrls: ['./all-scores.component.scss']
})
export class AllScoresComponent implements OnInit {
  
  latestScoresItems: Observable<GamesResponse>;

  constructor(private api: ApiService) {
    this.latestScoresItems = api.getGames(null);
  }

  ngOnInit(): void {
  }

}
