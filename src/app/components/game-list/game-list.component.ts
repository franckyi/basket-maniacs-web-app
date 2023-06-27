import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {GamesResponse} from "../../API/games-response";
import { PaginatorComponent } from '../common/paginator/paginator.component';

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    <app-paginator [meta]="(gameList | async)?.meta"></app-paginator>
    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of (gameList | async)?.data" [game]="game"></app-game-list-item>
    </mat-list>
  `,
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, AfterViewInit {
  @Input() perPage?: number;

  @ViewChild(PaginatorComponent)
  paginator!: PaginatorComponent;
  gameList?: Observable<GamesResponse>;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  
  }
  
  ngAfterViewInit(): void {

    console.log('paginator', this.paginator)
    
    this.gameList = this.api.getGames$(this.paginator.meta?.per_page, this.paginator.meta?.current_page);  

  }

  ngOnDestroy(): void {
  }

}
