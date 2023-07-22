import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { TeamsResponse } from "../../types/teams-response";
import { TeamsService } from 'src/app/services/teams.service';

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

  constructor(private teams: TeamsService) {}

  ngOnInit(): void {
    this.TeamListItem = this.teams.getTeams();
    this.TeamListItem.subscribe(
      response => { if (response) this.loading = false }
   );
  }

}
