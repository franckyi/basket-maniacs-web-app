import {Component, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from 'src/app/API/Game';
import { Team } from 'src/app/API/Team';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-search-game',
  template: `
    <div class="search">
      <div class="d-flex search__inputs">

        <mat-form-field class="search__input">
          <mat-label>Home team</mat-label>
          <input
            [(ngModel)]="homeTeamName"
            matInput placeholder="Team name"
            (input)="resetPrevSearch()"
            (input)="searchTeam()"
            (keydown.enter)="searchGame()"
          >
          <ul class="search__typeahead-list">
            <li *ngFor="let item of (suggestedTeamList | async)">{{item.full_name}}</li>
          </ul>
        </mat-form-field>
        
        <mat-form-field class="search__input">
          <mat-label>Visitor team</mat-label>
          <input
            [(ngModel)]="visitorTeamName"
            (input)="resetPrevSearch()"
            (keydown.enter)="searchGame()"
            matInput placeholder="Team name"
          >
        </mat-form-field>

      </div>

      <mat-form-field class="search__input">
        <mat-label>Season</mat-label>
        <input
          [(ngModel)]="season"
          (input)="resetPrevSearch()"
          (keydown.enter)="searchGame()"
          matInput placeholder="YYYY" required="required"
        >
      </mat-form-field>

      <div class="d-flex buttons">
        <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
        <button
          mat-flat-button color="accent" [style.margin-left.px]="10"
          (click)="searchGame()"
        >Search</button>
      </div>

      <p *ngIf="notFoundMsg !== '' ">{{ notFoundMsg }}</p>

      <mat-card class="card--rounded latest-scores search-results"
        *ngIf="btnClicked && results !== null && season !== '' "
      >
        <mat-card-content class="results">
            <ul class="results__list">
                <!-- <app-game-list-item *ngFor="let result (results | async)" [game]="result"></app-game-list-item> -->
            </ul>
        </mat-card-content>
      </mat-card>

      <app-paginator></app-paginator>

    </div>
  `,
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

  results?: Observable<Game[]>;
  season: string = '';
  homeTeamName: string = '';
  visitorTeamName: string = '';
  notFoundMsg: string = '';
  btnClicked: boolean = false;
  teamsNameList?: string[] = [];
  suggestedTeamList?: Observable<Team[]>;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  resetBtnClicked() {
    this.btnClicked = false;
  }

  searchTeam() {
    this.suggestedTeamList = this.api.searchTeam(this.homeTeamName);
  }
  
  searchGame() {

    this.btnClicked = true;
    this.results = of([]);

    if ( this.homeTeamName !== '' || this.visitorTeamName !== '' || this.season !== '' ) {
      // this.results = this.api.searchGame( Array.of( this.homeTeamName, this.visitorTeamName ), Number(this.season) );
    }

  }
  
  resetPrevSearch() {
    this.btnClicked = false;
    this.notFoundMsg = '';
  }

  resetFilters() {
    this.season = '';
    this.homeTeamName = '';
    this.visitorTeamName = '';
    this.results = of([]);
    this.resetPrevSearch();
  }

}
