import {Component, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from 'src/app/API/Team';
import { ApiService } from 'src/app/API/api.service';
import { GamesResponse } from 'src/app/API/games-response';
import { GameInputValues } from 'src/app/types/search-game-inputs';

@Component({
  selector: 'app-search-game',
  template: `
    <div class="search">
      <div class="d-flex search__inputs">

        <mat-form-field class="search__input">
          <mat-label>Home team</mat-label>
          <input
            [(ngModel)]="homeTeamName"
            (input)="searchTeam('homeTeamName')"
            (keydown.enter)="searchTeam('homeTeamName')"
            matInput placeholder="Team name"
            type="string"
          >
          <ul
            *ngIf="homeTeamName !== ''"
            class="search__selection-list"
          >
            <li class="search__selection-item"
              *ngFor="let item of (suggestedHomeTeamList | async)"
              (click)="handleHomeSuggestionsClick(item)">
              {{item.full_name}}
            </li>
          </ul>
        </mat-form-field>
        
        <mat-form-field class="search__input">
          <mat-label>Visitor team</mat-label>
          <input
            [(ngModel)]="visitorTeamName"
            (input)="searchTeam('visitorTeamName')"
            (keydown.enter)="searchTeam('visitorTeamName')"
            matInput placeholder="Team name"
            type="string"
          >
          <ul
            *ngIf="visitorTeamName !== ''"
            class="search__selection-list"
          >
            <li class="search__selection-item"
              *ngFor="let item of (suggestedVisitorTeamList | async)"
              (click)="handleVisitorSuggestionsClick(item)">
              {{item.full_name}}
            </li>
          </ul>
        </mat-form-field>

      </div>

      <mat-form-field class="search__input">
        <mat-label>Season</mat-label>
        <input
          [(ngModel)]="season"
          (input)="searchParameters = null;"
          (keydown.enter)="searchGame()"
          matInput placeholder="YYYY" required="required"
          type="string"
        >
      </mat-form-field>

      <div class="d-flex buttons">

        <button
          (click)="resetFilters()"
          mat-stroked-button
          class="btn-reset"
          color="basic"
        >Reset</button>

        <button
          (click)="searchGame()"
          mat-flat-button
          color="accent"
          [style.margin-left.px]="10"
        >Search</button>

      </div>

      <p *ngIf="notFoundMsg !== '' ">{{ notFoundMsg }}</p>

      <mat-card class="card--rounded latest-scores search-results"
        *ngIf="btnClicked && results !== null && season !== '' "
      >
        <mat-card-content class="results">
            <div class="results__list">
                <app-game-list-item *ngFor="let result of (results | async)?.data" [game]="result"></app-game-list-item>
            </div>
        </mat-card-content>
      </mat-card>

      <app-paginator></app-paginator>

    </div>
  `,
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

  results?: Observable<GamesResponse> | null;
  season: string = '';
  homeTeamName: string = '';
  visitorTeamName: string = '';
  homeTeamId?: number;
  visitorTeamId?: number;
  notFoundMsg: string = '';
  btnClicked: boolean = false;
  teamsNameList?: string[] = [];
  suggestedHomeTeamList?: Observable<Team[]>;
  suggestedVisitorTeamList?: Observable<Team[]>;
  searchParameters!: GameInputValues | null;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  resetBtnClicked() {
    this.btnClicked = false;
  }

  handleHomeSuggestionsClick(item: Team) {
    this.homeTeamName = item.full_name;
    this.homeTeamId = item.id;
    this.resetSuggestions();

    console.warn('called handleHomeSuggestionsClick()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);
  }
  
  handleVisitorSuggestionsClick(item: Team) {
    this.visitorTeamName = item.full_name;
    this.visitorTeamId = item.id;
    this.resetSuggestions();

    console.warn('called handleVisitorSuggestionsClick()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);
  }

  searchTeam(origin: string) {

    switch (origin) {
      case 'homeTeamName': this.suggestedHomeTeamList = this.api.searchTeam(this.homeTeamName);
      break;
      case 'visitorTeamName': this.suggestedVisitorTeamList = this.api.searchTeam(this.visitorTeamName);
      break;
    }

    console.warn('called searchTeam()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);
    
  }
  
  searchGame() {

    this.btnClicked = true;

    this.searchParameters = {
      homeTeamId: this.homeTeamId,
      visitorTeamId: this.visitorTeamId,
      season: this.season
    }

    console.warn('called searchGame()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);

    if ( this.searchParameters.season.length === 4 ) {
      this.resetPrevSearch();

      if (this.homeTeamName === '') this.searchParameters.homeTeamId = undefined;
      if (this.visitorTeamName === '') this.searchParameters.visitorTeamId = undefined;

      this.results = this.api.searchGame( this.searchParameters );
    }

    this.results!.subscribe( response => {
      if ( response.data.length == 0 ) this.notFoundMsg = 'No results found... Please try other criteria';
    })

  }

  resetSuggestions() {
    this.suggestedHomeTeamList = of([]);
    this.suggestedVisitorTeamList = of([]);
    console.warn('called resetSuggestions()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);
  }
  
  resetPrevSearch() {
    // this.btnClicked = false;
    this.notFoundMsg = '';
    console.warn('called resetPrevSearch()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);
  }

  resetFilters() {
    this.season = '';
    this.homeTeamName = '';
    this.visitorTeamName = '';
    this.results = null;
    this.searchParameters = null;
    this.resetPrevSearch();
    console.warn('called resetFilters()');
    console.log('this.homeTeamName', this.homeTeamName);
    console.log('this.visitorTeamName', this.visitorTeamName);
    console.log('this.searchParameters', this.searchParameters);
  }

}
