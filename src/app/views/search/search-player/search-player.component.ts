import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { PlayersResponse } from 'src/app/types/players-response';
import { PaginatorInterface } from 'src/app/types/paginator-interface';
import { PlayerInputValues } from 'src/app/types/search-player-inputs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['search-player.component.scss']
})

export class SearchPlayerComponent {

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
  };

  pageEvent!: PageEvent;

  constructor(
    private player: PlayersService,
    private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }

  handlePageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.paginatorOptions.pageSize = e.pageSize;
    this.paginatorOptions.pageIndex = e.pageIndex;
    this.searchPlayer();
  }

  searchPlayer(): void {
    this.loading = true;

    if (this.playerName !== '') {
      this.missingInputs = false;
      this.searchParameters = {
        playerName: this.playerName,
        teamName: this.teamName
      };
      
      this.results = this.player.searchPlayer(this.searchParameters, this.paginatorOptions);

      this.results?.subscribe(response => {
        if (response) this.loading    = false;
        this.notFoundResults            = response.data.length == 0 ? true : false;
        this.paginatorOptions.length    = response.meta.total_count;
        this.paginatorOptions.pageIndex = response.meta.current_page;
        this.paginatorOptions.pageSize  = response.meta.per_page;
      });
    }

    else this.openSnackBar('Missing player name', 'OK');

  }
  
  resetFilters(): void {
    this.playerName = '';
    this.teamName   = '';
    this.results    = null;
    this.searchParameters = null;
  }

}

