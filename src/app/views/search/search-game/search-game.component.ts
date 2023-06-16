import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { GamesResponse } from 'src/app/API/games-response';
import { Game } from 'src/app/API/Game';

@Component({
  selector: 'app-search-game',
  template: `
    <div class="search">
    <div class="d-flex">
        <mat-form-field style="margin-left: 15px;">
          <mat-label>Home team</mat-label>
          <input #homeName matInput placeholder="Team name">
        </mat-form-field>
        <mat-form-field style="margin-left: 15px;">
          <mat-label>Visitor team</mat-label>
          <input #visitorName matInput placeholder="Team name">
        </mat-form-field>
      </div>
      <mat-form-field style="margin-left: 15px;">
        <mat-label>Season</mat-label>
        <input [(ngModel)]="season" matInput placeholder="YYYY" required="required">
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQueries(season, homeName.value, visitorName.value )" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <mat-card *ngIf="results !== null" class="search-results">
          <mat-card-content>
            <ul>
              <li *ngFor="let result of results; index as i">
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
  results: any | undefined = [];
  season: string = '';

  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQueries(season: string, homeTeam: string, visitorTeam: string) {
    console.log('season:', season);
    console.log('homeTeam:', homeTeam);
    console.log('visitorTeam:', visitorTeam);

    if ( homeTeam !== '' && visitorTeam === '' ) {
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
    else if ( homeTeam === '' && visitorTeam !== '' ) {
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
    console.log('called resetFilters()')
  }

}
