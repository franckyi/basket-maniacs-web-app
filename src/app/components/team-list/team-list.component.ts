import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { TeamsResponse } from "../../types/teams-response";
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-list',
  template: `
    <app-spinner *ngIf="loading; else contentBlock"></app-spinner>
    <ng-template #contentBlock>
      <ul class="results__list">
        <app-team-list-item *ngFor="let team of (TeamListItem | async)?.data" [team]="team"></app-team-list-item>
      </ul>
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
