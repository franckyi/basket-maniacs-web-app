import {Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-search-game',
  template: `
    <div class="search">
      <div class="d-flex">
        <mat-form-field style="margin-left: 15px;">
          <mat-label>Home team</mat-label>
          <input
            matInput placeholder="Team name"
            [(ngModel)]="homeTeam"
            (input)="resetPrevSearch()"
          >
        </mat-form-field>
        <mat-form-field style="margin-left: 15px;">
          <mat-label>Visitor team</mat-label>
          <input
            matInput placeholder="Team name"
            [(ngModel)]="visitorTeam"
            (input)="resetPrevSearch()"
          >
        </mat-form-field>
      </div>
      <mat-form-field style="margin-left: 15px;">
        <mat-label>Season</mat-label>
        <input
          matInput placeholder="YYYY" required="required"
          [(ngModel)]="season"
          (input)="resetPrevSearch()"
        >
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button
        mat-flat-button color="primary" [style.margin-left.px]="10"
        (click)="passQueries(season, homeTeam, visitorTeam )"
      >Search</button>
      <p *ngIf="notFoundMsg !== '' ">{{ notFoundMsg }}</p>
      <mat-card *ngIf="btnClicked && results !== null && season !== '' " class="search-results">
        <mat-card-content class="results">
          <ul class="results__list">
            <li *ngFor="let result of results" class="results__item">
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
  notFoundMsg: string = '';
  btnClicked: boolean = false;

  constructor(private _api: ApiService) {}
  ngOnInit() {}

  resetBtnClicked() {
    this.btnClicked = false;
  }

  passQueries(season: string, homeTeam: string, visitorTeam: string) {
    this.btnClicked = true;
    this.results = '';
    if ( homeTeam !== '' && visitorTeam === '' ) {
      this._api.getGames(season, 500)
      .subscribe(
        (response) => {
          this.results = response.data.filter( game => 
            game.home_team.full_name.toLowerCase().includes( homeTeam.toLowerCase() )
          )
          if (this.results.length >= 1) {
            console.log('✅ filtered games', this.results);
          } else {
            console.log(this.results.length);
            console.log('not found')
            this.notFoundMsg = 'No teams found... Try again';
            this.results = null;
          }
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
          if (this.results.length >= 1) {
            console.log('✅ filtered games', this.results);
          } else {
            console.log(this.results.length);
            console.log('not found')
            this.notFoundMsg = 'No games found... Try again';
            this.results = null;
          }
        }
      );
    }
    if ( homeTeam !== '' && visitorTeam !== '' ) {
      this._api.getGames(season, 500)
      .subscribe(
        (response) => {
          this.results = response.data.filter( game => 
            game.home_team.full_name.toLowerCase().includes( homeTeam.toLowerCase() ) &&
            game.visitor_team.full_name.toLowerCase().includes( visitorTeam.toLowerCase() )
          )
          if (this.results.length >= 1) {
            console.log('✅ filtered games', this.results);
          } else {
            console.log(this.results.length);
            console.log('not found')
            this.notFoundMsg = 'No games found... Try other criteria';
            this.results = null;
          }
        }
      );
    } 
  }
  
  resetPrevSearch() {
    this.btnClicked = false;
    this.notFoundMsg = '';
  }

  resetFilters() {
    this.season = '';
    this.homeTeam = '';
    this.visitorTeam = '';
    this.results = null;
    this.resetPrevSearch();
  }

}
