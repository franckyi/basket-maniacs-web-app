import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { GamesResponse } from 'src/app/API/games-response';
import { Game } from 'src/app/API/Game';

@Component({
  selector: 'app-search-game',
  template: `
    <div class="search">
      <mat-form-field style="margin-left: 15px;">
        <mat-label>By Season</mat-label>
        <input [(ngModel)]="season" matInput placeholder="YYYY">
      </mat-form-field>
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
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(season, homeName.value, visitorName.value )" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <mat-card *ngIf="results !== null" class="search-results">
          <mat-card-content>
            <ul>
              <li *ngFor="let result of results; index as i">
              <div>{{ result.season }}</div>
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
  season: number | null= null;

  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQuery (season: number | null, homeTeam: string, visitorTeam: string) {
    console.log('called passQuery()');
    console.log('season:', season);
    this._api.getGames(season, 500)
    .subscribe(
      (response) => {
        this.results = response.data.filter( game => game.season == season)
        console.log('✅ filtered games', this.results);
      }
    );
  }

  resetFilters() {
    console.log('called resetFilters()')
  }

}
