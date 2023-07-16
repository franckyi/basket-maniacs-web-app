import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
          (keydown.enter)="search(teamName)"
        >
      </mat-form-field>

      <div class="d-flex buttons">
        <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
        <button (click)="search(teamName)" [style.margin-left.px]="10" mat-flat-button color="accent">Search</button>
      </div>

      <p *ngIf="notFoundMsg !== '' && teamName !== '' ">{{ notFoundMsg }}</p>

      <mat-card *ngIf="results !== null && teamName !== '' " class="search-results">
        <mat-card-content>
          <ul class="results__list">
            <app-team-list-item *ngFor="let result of (results | async)" [team]="result"></app-team-list-item>
          </ul>
        </mat-card-content>
      </mat-card>

    </div>
  `,
  styleUrls: ['./search-team.component.scss']
})
export class SearchTeamComponent implements OnInit {

  results?: Observable<Team[]>;
  teamName: string = '';
  notFoundMsg: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    
  }

  search(name: string) {
    this.results = this.api.searchTeam(name);
  }

  emptyNotFoundMsg() {
    this.notFoundMsg = '';
  }

  resetFilters() {
    this.teamName = '';
    this.results = of([]);
  }
  
}
