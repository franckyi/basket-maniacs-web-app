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
    <mat-paginator
      (page)="handlePageEvent($event)"
      [length]="length"
      [pageSize]="pageSize"
      [disabled]="disabled"
      [showFirstLastButtons]="showFirstLastButtons"
      [pageSizeOptions]="showPageSizeOptions ? pageSizeOptions : []"
      [hidePageSize]="hidePageSize"
      [pageIndex]="pageIndex"
      aria-label="Select page">
    </mat-paginator>
    <!-- <app-paginator
      (onPageChangeEvent)="receiveOptions($event)"
      [meta]="(gameList | async)?.meta"
    ></app-paginator> -->
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

  }

  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value..
    // console.log(changes)
  }

  ngOnDestroy(): void {
    
  }

}
