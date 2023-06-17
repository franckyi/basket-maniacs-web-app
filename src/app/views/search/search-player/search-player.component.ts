import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <div class="d-flex">
        <mat-form-field style="margin-left: 15px;">
          <mat-label for="name">Player name</mat-label>
          <input
            matInput id="name" placeholder="First or last name"
            [(ngModel)]="playerName"
            (input)="emptyNotFoundMsg()"
          >
        </mat-form-field>
        <mat-form-field style="margin-left: 15px;">
          <mat-label for="team">Team name</mat-label>
          <input
            matInput id="team" placeholder="Team name"
            [(ngModel)]="teamName"
            (input)="emptyNotFoundMsg()"
          >
        </mat-form-field>
      </div>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(playerName)" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <p *ngIf="notFoundMsg !== '' && playerName !== '' ">{{ notFoundMsg }}</p>
      <div class="pagination" *ngIf="results !== null && results.length > 0">
        <mat-icon aria-hidden="false" aria-label="Previous page" fontIcon="navigate_before"
          *ngIf="page > 1"
          (click)="goToPrevPage()"
        ></mat-icon>
          <span>{{ page }}</span>
        <mat-icon aria-hidden="false" aria-label="Next page" fontIcon="navigate_next"
          (click)="goToNextPage()"></mat-icon>
      </div>
      <mat-card class="search-results" *ngIf="results !== null && results.length > 0">
        <mat-card-content class="results">
          <ul class="game__list">
            <li class="game__item player" *ngFor="let result of results">
            <div>{{ result.first_name }}</div>
            <div>{{ result.last_name }}</div>
            <div>{{ result.team.full_name }}</div>
            <div>({{ result.team.abbreviation }})</div>
            <img
              class="club-logo"
              [src]="'../../assets/img/team-logos/' + result.team.abbreviation + '.svg'"
              [alt]="result.team.full_name + 'logo'"
              height="24"
            >
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
  teamName: string = '';
  results: any | undefined = null;
  notFoundMsg: string = '';
  page: number = 1;
  
  constructor(private _api: ApiService) {}
  ngOnInit() {}

  goToPrevPage() {
    console.log('called goToPrevPage()');
    this.page -= 1;
    console.log('this.page', this.page);
    this.passQuery (this.playerName);
  }

  goToNextPage() {
    console.log('called goToNextPage()');
    this.page += 1;
    console.log('this.page', this.page);
    this.passQuery (this.playerName);
  }

  passQuery (name: string) {
    if (this.playerName !== '' || this.teamName !== '') {
      if (this.playerName !== '' && this.teamName === '') {
        this._api.getPlayers(name, 100, this.page)
        .subscribe(
          (response) => {
            console.log('this.page', this.page);
            if (response.data.length > 0) {
              this.results = response.data;
            } else {
              console.log('not found')
              this.notFoundMsg = 'No players found... Try another name';
              this.results = null;
            }
          }
        );
      } 
      else if (this.playerName === '' && this.teamName !== '') {
        this._api.getPlayers(name, 100, this.page)
        .subscribe(
          (response) => {
            console.log('this.page', this.page);
            if (response.data.length > 0) {
              this.results = response.data.filter( 
                p => p.team.full_name.toLowerCase().includes( this.teamName.toLowerCase() )
                );
              console.log(this.results);
            } else {
              console.log('not found')
              this.notFoundMsg = 'No players found... Try another name';
              this.results = null;
            }
          }
        );
      } 
      else {
        this._api.getPlayers(name, 100, this.page)
        .subscribe(
          (response) => {
            console.log('this.page', this.page);
            if (response.data.length > 0) {
              this.results = response.data.filter( 
                p => p.team.full_name.toLowerCase().includes( this.teamName.toLowerCase() )
                );
              console.log(this.results);
            } else {
              console.log('not found')
              this.notFoundMsg = 'No players found... Try another name';
              this.results = null;
            }
          }
        );
      }
    }
  }

  emptyNotFoundMsg() {
    this.notFoundMsg = '';
  }
  
  resetFilters() {
    this.playerName = '';
    this.results = null;
  }

}

