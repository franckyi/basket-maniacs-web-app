import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/API/api.service';
import { PlayersResponse } from 'src/app/API/players-response';
import { PaginatorInterface } from 'src/app/types/paginator-interface';
import { PlayerInputValues } from 'src/app/types/search-player-inputs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <div class="d-flex search__inputs">

        <mat-form-field>
          <mat-label for="name">Player name</mat-label>
          <input
            required
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

      <app-spinner *ngIf="loading; else contentBlock"></app-spinner>

      <ng-template #contentBlock>
        <mat-card
          *ngIf="results"
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
      </ng-template>

      <mat-paginator #paginator
        *ngIf="!notFoundResults && results"
        (page)="handlePageEvent($event)"
        [length]="this.paginatorOptions.length"
        [pageSize]="this.paginatorOptions.pageSize"
        [showFirstLastButtons]="true"
        [pageSizeOptions]="this.paginatorOptions.pageSizeOptions"
        [pageIndex]="this.paginatorOptions.pageIndex"
        aria-label="Select page"
        class="paginator">
      </mat-paginator>

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
  missingInputs?: boolean;
  loading: boolean = false;

  paginatorOptions: PaginatorInterface = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20]
  }

  pageEvent!: PageEvent;

  constructor(private api: ApiService, private _snackBar: MatSnackBar) {
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  
  ngOnInit(): void {

  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.paginatorOptions.pageSize = e.pageSize;
    this.paginatorOptions.pageIndex = e.pageIndex;
    this.searchPlayer()
  }

  searchPlayer() {

    this.loading = true;

    if ( this.playerName !== '' ) {

      this.missingInputs = false;
      this.searchParameters = {
        playerName: this.playerName,
        teamName: this.teamName
      }

      this.results = this.api.searchPlayer(this.searchParameters, this.paginatorOptions);

      this.results?.subscribe( response => {
        if (response) this.loading = false;
        this.notFoundResults = response.data.length == 0 ? true : false;
        this.paginatorOptions.length = response.meta.total_count;
        this.paginatorOptions.pageIndex = response.meta.current_page;
        this.paginatorOptions.pageSize = response.meta.per_page;
      })
      
    }

    else this.openSnackBar('Missing player name', 'OK');

  }
  
  resetFilters() {
    this.playerName = '';
    this.teamName = '';
    this.results = null;
    this.searchParameters = null;
  }

}

