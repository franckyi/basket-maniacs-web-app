import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import { ApiService } from "../../API/api.service";
import { Observable } from "rxjs";
import { GamesResponse } from "../../API/games-response";
import { PaginatorComponent } from '../common/paginator/paginator.component';
import {PaginatorInterface} from '../../types/paginator-interface';

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>

    <mat-paginator #paginator
      (page)="handlePageEvent($event)"
      [length]="this.paginatorOptions.length"
      [pageSize]="this.paginatorOptions.pageSize"
      [showFirstLastButtons]="true"
      [pageSizeOptions]="this.paginatorOptions.pageSizeOptions"
      [pageIndex]="this.paginatorOptions.pageIndex"
      aria-label="Select page">
    </mat-paginator>

    <!-- <div class="demo-data">
      <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>
      <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>
    </div> -->

    <!-- <app-paginator
      (onPageChangeEvent)="receiveOptions($event)"
      [meta]="(gameList | async)?.meta"
    ></app-paginator> -->
    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of data" [game]="game"></app-game-list-item>
    </mat-list>
  `,
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit, AfterViewInit {
  
  paginatorOptions: PaginatorInterface = {
    length: 0,
    pageSize: 10,
    pageIndex: null,
    pageSizeOptions: [10, 25, 50, 100]
  }

  pageEvent!: PageEvent;
  data?: any;

  constructor(private api: ApiService) { }

  typeOfData: string = 'games';

  handlePageEvent(e: PageEvent) {
    // console.log('event:', e)
    this.pageEvent = e;
    this.paginatorOptions.pageSize = e.pageSize;
    this.paginatorOptions.pageIndex = e.pageIndex;
    this.fetchData(this.paginatorOptions, this.typeOfData)
  }

  fetchData(paginatorOptions: PaginatorInterface, typeOfData: string) {
    return this.api.getServerData(this.paginatorOptions, this.typeOfData)
      .subscribe( response => {
        this.paginatorOptions.length = response.meta.total_count;
        this.paginatorOptions.pageIndex = response.meta.current_page;
        this.data = response.data;
        console.log('in subscribe..')
        console.log('meta.current_page:', response.meta.current_page)
        console.log('pageIndex:', this.paginatorOptions.pageIndex)
      })
  }

  ngOnInit(): void {
    this.fetchData(this.paginatorOptions, this.typeOfData)
  }
  
  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    
  }

}
