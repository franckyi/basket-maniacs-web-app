import { Component, OnInit } from '@angular/core';
import {Game} from "../../API/Game";

@Component({
  selector: 'app-latest-score-item',
  templateUrl: './latest-score-item.component.html',
  styleUrls: ['./latest-score-item.component.scss']
})
export class latestScoresItems implements OnInit {

  @Input() score?: Game;

  constructor(private api: ApiService) { }
  this.latestScoresItems = api.getGames();
  ngOnInit(): void {
  }

}
