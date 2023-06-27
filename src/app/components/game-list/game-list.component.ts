import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable, Subscription} from "rxjs";
import {GamesResponse} from "../../API/games-response";
import { Meta } from 'src/app/API/meta';
import { PaginatorInterface } from 'src/app/types/paginator-interface'

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    <app-paginator
      [meta]="(gameList | async)?.meta"
      (changePaginatorOptionsEvent)="receivePaginatorOptions($event)"
    ></app-paginator>
    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of (gameList | async)?.data" [game]="game"></app-game-list-item>
    </mat-list>
    <button (click)="showMeta()">show meta</button>
  `,
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() perPage?: number;
  paginatorOptions?: PaginatorInterface;

  gameList?: Observable<GamesResponse>;
  // meta?: object;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.meta = this.api.getGames$(this.perPage).subscribe( response => {
    //   console.log('inside meta') 
    //   console.log('response.meta', response.meta) 
    //   this.meta = response.meta;
    // })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gameList = this.api.getGames$(this.perPage);    
  }

  ngOnDestroy(): void {
  }

  showMeta() {
    // console.log(this.meta)
  }

  receivePaginatorOptions(value: any) {
    console.log('value', value)
    this.paginatorOptions = value
    console.log('this.paginatorOptions', this.paginatorOptions)
  }

}
