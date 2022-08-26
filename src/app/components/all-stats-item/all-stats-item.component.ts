import { Component, Input, OnInit } from '@angular/core';
import {GameStats} from "../../API/stats";

@Component({
  selector: 'app-all-stats-item',
  templateUrl: './all-stats-item.component.html',
  styleUrls: ['./all-stats-item.component.scss']
})
export class AllStatsItemComponent implements OnInit {
  @Input() stats?: GameStats;

  constructor() { }

  ngOnInit(): void {
  }

}
