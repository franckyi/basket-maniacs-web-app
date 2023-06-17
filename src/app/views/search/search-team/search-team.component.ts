import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Team } from 'src/app/API/Team';

@Component({
  selector: 'app-search-team',
  template: `
    <div class="search">
      <mat-form-field style="margin-left: 15px;">
        <mat-label>Team name</mat-label>
        <input [(ngModel)]="teamName" matInput required="required">
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(teamName)" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <mat-card *ngIf="results !== null && teamName !== '' " class="search-results">
          <mat-card-content>
            <ul>
              <li *ngFor="let result of results">
              <div>{{ result.full_name }}</div>
              <div>{{ result.abbreviation }}</div>
              <div>{{ result.city }}</div>
              <div>{{ result.division }}</div>
              </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./search-team.component.scss']
})
export class SearchTeamComponent implements OnInit {
  results: any | undefined = null;
  teamName: string = '';

  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQuery (name: string) {
    this._api.getTeams()
    .subscribe(
      (response) => {
        this.results = response.data.filter( 
          (team: Team) => team.full_name.toLowerCase().includes(name.toLowerCase())
        );
        console.log('✅ filtered teams', this.results)
      }
    );
  }

  resetFilters() {
    this.teamName = '';
    this.results = null;
  }
}
