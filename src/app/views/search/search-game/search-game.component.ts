import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-search-game',
  template: `
    <div class="search">
    <div class="d-flex">
        <mat-form-field style="margin-left: 15px;">
          <mat-label>Home team</mat-label>
          <input [(ngModel)]="homeTeam" matInput placeholder="Team name">
        </mat-form-field>
        <mat-form-field style="margin-left: 15px;">
          <mat-label>Visitor team</mat-label>
          <input [(ngModel)]="visitorTeam" matInput placeholder="Team name">
        </mat-form-field>
      </div>
      <mat-form-field style="margin-left: 15px;">
        <mat-label>Season</mat-label>
        <input [(ngModel)]="season" matInput placeholder="YYYY" required="required">
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQueries(season, homeTeam, visitorTeam )" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <mat-card *ngIf="results !== null && season !== '' " class="search-results">
          <mat-card-content>
            <ul>
              <li *ngFor="let result of results">
              <div>{{ result.home_team.full_name }} VS {{ result.visitor_team.full_name }} {{ result.season }}</div>
              </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {
  results: any | undefined = null;
  season: string = '';
  homeTeam: string = '';
  visitorTeam: string = '';

  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQueries(season: string, homeTeam: string, visitorTeam: string) {
    this.results = '';
    if ( homeTeam !== '' && visitorTeam === '' && season !== '' ) {
      this._api.getGames(season, 500)
      .subscribe(
        (response) => {
          this.results = response.data.filter( game => 
            game.home_team.full_name.toLowerCase().includes( homeTeam.toLowerCase() )
          )
          console.log('✅ filtered games', this.results);
        }
      );
    } 
    else if ( homeTeam === '' && visitorTeam !== '' && season !== '') {
      this._api.getGames(season, 500)
      .subscribe(
        (response) => {
          this.results = response.data.filter( game => 
            game.visitor_team.full_name.toLowerCase().includes( visitorTeam.toLowerCase() )
          )
          console.log('✅ filtered games', this.results);
        }
      );
    }
  }

  resetFilters() {
    this.season = '';
    this.homeTeam = '';
    this.visitorTeam = '';
    this.results = null;
  }

}
