import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Player} from "../../API/players";
import {Observable} from "rxjs";
import {StatsResponse} from "../../API/stats-response";
import { AllStatsItemComponent } from '../all-stats-item/all-stats-item.component';

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.scss']
})
export class AllStatsComponent implements OnInit {

  AllStatsItems: Observable<StatsResponse>;

  constructor(private api: ApiService) {
    this.AllStatsItems = api.getGameStats();
   }

  ngOnInit(): void {
  }

}
