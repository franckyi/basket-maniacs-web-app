import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {GameStats} from "../../API/stats";
import {Observable} from "rxjs";
import {StatsResponse} from "../../API/stats-response";

@Component({
  selector: 'app-player-of-day',
  templateUrl: './player-of-day.component.html',
  styleUrls: ['./player-of-day.component.scss']
})
export class PlayerOfDayComponent implements OnInit {
  @Input() stats?: GameStats;

  SingleGameStats: Observable<StatsResponse>;

  constructor(private api: ApiService) {
    this.SingleGameStats = api.getStats();
   }

  ngOnInit(): void {
  }

}
