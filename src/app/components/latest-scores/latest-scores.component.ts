import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Game} from "../../API/Game";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";

@Component({
  selector: 'app-latest-scores',
  templateUrl: './latest-scores.component.html',
  styleUrls: ['./latest-scores.component.scss']
})
export class LatestScoresComponent implements OnInit {

  latestScoresItems: Observable<GamesResponse>;

  constructor() { }

  ngOnInit(): void {
  }

}
