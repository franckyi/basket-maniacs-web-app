import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/API/api.service';
import { PlayersResponse } from 'src/app/API/players-response';
import { PlayerInputValues } from 'src/app/types/search-player-inputs';

@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <div class="d-flex search__inputs">
        <mat-form-field>
          <mat-label for="name">Player name</mat-label>
          <input
            matInput id="name" placeholder="First or last name"
            [(ngModel)]="playerName"
            (keydown.enter)="searchParameters!.playerName = playerName"
          >
        </mat-form-field>
        <mat-form-field>
          <mat-label for="team">Team name</mat-label>
          <input
            matInput id="team" placeholder="Team name"
            [(ngModel)]="teamName"
            (keydown.enter)="searchParameters!.teamName = teamName"
          >
        </mat-form-field>
      </div>
      
      <div class="d-flex buttons">
        <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
        <button (click)="searchPlayer()" mat-flat-button color="accent">Search</button>
      </div>
      
      <p *ngIf="notFoundResults">No results found... Please try other criteria</p>

      <mat-card 
        *ngIf="results !== null"
        class="mat-card mat-focus-indicator card--rounded search-results"
      >
        <mat-card-content class="mat-card-content results">
          <ul class="results__list">
            <li class="player results__item" *ngFor="let result of (results | async)?.data">
              {{ result.first_name }}
              {{ result.last_name }},
              {{ result.team.full_name }}
              ({{ result.team.abbreviation }})
              <img
                class="player__club-logo"
                [src]="'../../assets/img/team-logos/' + result.team.abbreviation + '.png'"
                [alt]="result.team.full_name + 'logo'"
              >
            </li>
          </ul>
        </mat-card-content>
      </mat-card>

      <app-paginator></app-paginator>

    </div>
    `
})

export class SearchPlayerComponent implements OnInit {

  filters: any = [];
  playerName: string = '';
  teamName: string = '';
  results!: Observable<PlayersResponse> | null;
  notFoundResults?: boolean;
  page: number = 1;
  searchParameters!: PlayerInputValues | null;

  constructor(private api: ApiService) {
    
  }
  
  ngOnInit(): void {

  }

  searchPlayer() {

    // if ( this.playerName || this.teamName ) {
      this.searchParameters = {
        playerName: this.playerName,
        teamName: this.teamName
      }
      this.results = this.api.searchPlayer(this.searchParameters);
      this.notFoundResults = false;
    // }

    this.results?.subscribe( response => {
      if ( response.data.length == 0 ) this.notFoundResults = true;
    })

  }
  
  resetFilters() {
    this.playerName = '';
    this.teamName = '';
    this.results = null;
    this.searchParameters = null;
  }

}

