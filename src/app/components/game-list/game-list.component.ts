import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ApiService } from "../../API/api.service";
import { Observable } from "rxjs";
import { GamesResponse } from "../../API/games-response";
import { PaginatorComponent } from '../common/paginator/paginator.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    <app-paginator
      (onPageChangeEvent)="receiveOptions($event)"
      [meta]="(gameList | async)?.meta"
    ></app-paginator>
    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of (gameList | async)?.data" [game]="game"></app-game-list-item>
    </mat-list>
  `,
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() perPage?: number;
  pageIndex?: number = 1;
  totalCount?: number = 0;

  @ViewChild(PaginatorComponent)
  private paginator!: PaginatorComponent;

  gameList?: Observable<GamesResponse>;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  
  }
  
  ngAfterViewInit(): void {
    this.gameList = this.api.getGames$(this.paginator.meta?.per_page, this.paginator.meta?.current_page);
    // console.log('paginator', this.paginator)
    this.totalCount = this.paginator.meta?.total_count;
    this.pageIndex = this.paginator.meta?.current_page;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value..
    // console.log(changes)
  }

  ngOnDestroy(): void {
    
  }

  receiveOptions(event: PageEvent) {
    console.log('received options:', event)
    // console.log('this.paginator.meta:', this.paginator.meta)
    // this.pageIndex = event.pageIndex; // inutile?
    this.gameList = this.api.getGames$(event.pageSize, this.totalCount);
  }



}
