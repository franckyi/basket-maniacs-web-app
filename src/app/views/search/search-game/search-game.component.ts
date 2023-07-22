import {Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from 'src/app/types/team';
import { GamesResponse } from 'src/app/types/games-response';
import { GameInputValues } from 'src/app/types/search-game-inputs';
import { PaginatorInterface } from 'src/app/types/paginator-interface';
import { PageEvent } from '@angular/material/paginator';
import { GamesService } from 'src/app/services/games.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-search-game',
  templateUrl: 'search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent {

  results?: Observable<GamesResponse> | null;
  notFoundResults?: boolean;
  notFoundMsg: string        = '';
  btnClicked: boolean        = false;
  loading: boolean           = false;
  season: string             = '';
  homeTeamName: string       = '';
  visitorTeamName: string    = '';
  homeTeamId?: number;
  visitorTeamId?: number;
  teamsNameList?: string[]   = [];
  suggestedHomeTeamList?:    Observable<Team[]>;
  suggestedVisitorTeamList?: Observable<Team[]>;
  searchParameters!:         GameInputValues | null;
  pageEvent!:                PageEvent;

  constructor(
    private teams: TeamsService,
    private games: GamesService) {}

  paginatorOptions: PaginatorInterface = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20]
  };
  
  handlePageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.paginatorOptions.pageSize = e.pageSize;
    this.paginatorOptions.pageIndex = e.pageIndex;
    this.fetchGame();
  }

  resetBtnClicked(): void {
    this.btnClicked = false;
  }

  handleHomeSuggestionsClick(item: Team): void {
    this.homeTeamName = item.full_name;
    this.homeTeamId = item.id;
    this.resetSuggestions();
  }
  
  handleVisitorSuggestionsClick(item: Team): void {
    this.visitorTeamName = item.full_name;
    this.visitorTeamId = item.id;
    this.resetSuggestions();
  }

  fetchTeam(origin: string): void {

    switch (origin) {
      case 'homeTeamName': this.suggestedHomeTeamList = this.teams.searchTeam(this.homeTeamName);
      break;
      case 'visitorTeamName': this.suggestedVisitorTeamList = this.teams.searchTeam(this.visitorTeamName);
      break;
    }
    
  }
  
  fetchGame(): void {
    this.btnClicked = true;
    this.loading = true;
    this.searchParameters = {
      homeTeamId: this.homeTeamId,
      visitorTeamId: this.visitorTeamId,
      season: this.season
    };

    if (this.searchParameters.season.length === 4) {
      this.resetPrevSearch();

      if (this.homeTeamName === '')    this.searchParameters.homeTeamId = undefined;
      if (this.visitorTeamName === '') this.searchParameters.visitorTeamId = undefined;

      this.results = this.games.searchGame(this.searchParameters);

      this.results.subscribe( response => {
          if (response) this.loading = false;
          if (response.data.length == 0) this.notFoundMsg = 'No results found... Please try other criteria';
          this.notFoundResults = response.data.length == 0 ? true : false;
          this.paginatorOptions.length = response.meta.total_count;
          this.paginatorOptions.pageIndex = response.meta.current_page;
          this.paginatorOptions.pageSize = response.meta.per_page;
      });
    }


  }

  resetSuggestions(): void {
    this.suggestedHomeTeamList = of([]);
    this.suggestedVisitorTeamList = of([]);
  }
  
  resetPrevSearch(): void {
    this.notFoundMsg = '';
  }

  resetFilters(): void {
    this.season = '';
    this.homeTeamName = '';
    this.visitorTeamName = '';
    this.results = null;
    this.searchParameters = null;
    this.resetPrevSearch();
  }

}
