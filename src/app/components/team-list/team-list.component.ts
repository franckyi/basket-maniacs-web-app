import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {TeamsResponse} from "../../API/teams-response";

@Component({
  selector: 'app-team-list',
  template: `
    <mat-card class="card--rounded latest-scores results">
      <mat-card-content>
        <ul class="results__list">
          <app-team-list-item *ngFor="let team of (TeamListItem | async)?.data" [team]="team"></app-team-list-item>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  TeamListItem: Observable<TeamsResponse>;

  constructor(private api: ApiService) {
    this.TeamListItem = api.getTeams();
   }

  ngOnInit(): void {
  }

}
