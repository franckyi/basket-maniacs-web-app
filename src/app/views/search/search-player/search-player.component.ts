import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <mat-form-field style="margin-left: 15px;">
        <mat-label for="name">Player name</mat-label>
        <input [(ngModel)]="playerName" matInput id="name" placeholder="First or last name" required="required">
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(playerName)" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <p *ngIf="results !== null && results.length <= 0">No players found... Try another name</p>
      <mat-card class="search-results" *ngIf="results !== null && results.length > 0">
        <mat-card-content>
          <ul>
            <li *ngFor="let result of results">
            <div>{{ result.first_name }}</div>
            <div>{{ result.last_name }}</div>
            <div>{{ result.team.full_name }}</div>
            <div>{{ result.team.division }}</div>
            </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
    `,
  styleUrls: ['./search-player.component.scss']
})

export class SearchPlayerComponent implements OnInit {
  filters: any = [];
  playerName: string = '';
  results: any | undefined = null;
  noResults: boolean = false;
  
  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQuery (name: string) {
    if (this.playerName !== '') {
      this._api.getPlayers(name)
      .subscribe(
        (response) => {
          if (response.data.length > 0) {
            this.results = response.data;
          } else {
            this.noResults === true;
            this.results = null;
          }
        }
      );
    }
  }
  
  resetFilters() {
    this.playerName = '';
    this.results = null;
  }

}

