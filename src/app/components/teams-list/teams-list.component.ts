import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {TeamsResponse} from "../../API/teams-response";

@Component({
  selector: 'app-teams-list',
  template: `
    <app-header></app-header>
    <h1 class="section-heading">NBA teams list</h1>
    <mat-card class="card--rounded latest-scores results">
      <mat-card-content>
        <ul class="results__list">
          <app-all-teams-item *ngFor="let team of (AllTeamsItems | async)?.data" [team]="team"></app-all-teams-item>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  AllTeamsItems: Observable<TeamsResponse>;

  constructor(private api: ApiService) {
    this.AllTeamsItems = api.getTeams();
   }

  ngOnInit(): void {
  }

}
