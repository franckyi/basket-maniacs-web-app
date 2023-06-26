import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Team } from 'src/app/API/Team';

@Component({
  selector: 'app-search-team',
  template: `
    <div class="search">
      <mat-form-field>
        <mat-label>Team name</mat-label>
        <input
          matInput
          [(ngModel)]="teamName"
          (input)="emptyNotFoundMsg()"
          required="required"
          (keydown.enter)="passQuery(teamName)"
        >
      </mat-form-field>
      <div class="d-flex buttons">
        <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
        <button (click)="passQuery(teamName)" [style.margin-left.px]="10" mat-flat-button color="accent">Search</button>
      </div>
      <p *ngIf="notFoundMsg !== '' && teamName !== '' ">{{ notFoundMsg }}</p>
      <mat-card *ngIf="results !== null && teamName !== '' " class="search-results">
        <mat-card-content>
          <ul class="results__list">
            <app-team-list-item *ngFor="let result of results" [team]="result"></app-team-list-item>
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
  notFoundMsg: string = '';

  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQuery (name: string) {
    this._api.getTeams()
    .subscribe(
      (response) => {
        this.results = response.data.filter( 
          (team: Team) => team.full_name.toLowerCase().includes(name.toLowerCase())
        );
        if (this.results.length >= 1) {
          console.log(this.results.length);
        } else {
            console.log(this.results.length);
            console.log('not found')
            this.notFoundMsg = 'No teams found... Try again';
            this.results = null;
        }
      }
    );
  }

  emptyNotFoundMsg() {
    this.notFoundMsg = '';
  }

  resetFilters() {
    this.teamName = '';
    this.results = null;
  }
}
