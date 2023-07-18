import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {TeamsResponse} from "../../API/teams-response";

@Component({
  selector: 'app-team-list',
  template: `
    <app-spinner *ngIf="loading; else contentBlock"></app-spinner>

    <ng-template #contentBlock>
      <mat-card class="card--rounded latest-scores results">
        <mat-card-content>
          <ul class="results__list">
            <app-team-list-item *ngFor="let team of (TeamListItem | async)?.data" [team]="team"></app-team-list-item>
          </ul>
        </mat-card-content>
      </mat-card>
    <ng-template>
  `,
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  loading: boolean = true;

  TeamListItem?: Observable<TeamsResponse>;

  constructor(private api: ApiService) {
    
   }

  ngOnInit(): void {
    this.TeamListItem = this.api.getTeams();
    this.TeamListItem.subscribe(
      response => {
        if ( response ) this.loading = false;
      }
    );
  }

}
