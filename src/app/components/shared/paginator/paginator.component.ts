import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GamesService } from 'src/app/services/games.service';
import { PaginatorInterface } from 'src/app/types/paginator-interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Output() changePageOptionsEvent = new EventEmitter<any[]>();

  constructor(private games: GamesService) {}

  paginatorOptions: PaginatorInterface = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20]
  };

  pageEvent!: PageEvent;
  typeOfData: string = 'games';
  data?: any[];

  ngOnInit(): void {
    this.fetchData(this.paginatorOptions, this.typeOfData);
  }

  handlePageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.paginatorOptions.pageSize  = e.pageSize;
    this.paginatorOptions.pageIndex = e.pageIndex;
    this.fetchData(this.paginatorOptions, this.typeOfData)
  }

  fetchData(paginatorOptions: PaginatorInterface, typeOfData: string) {
    return this.games.getAllGames(this.paginatorOptions, this.typeOfData)
      .subscribe(response => {
        this.paginatorOptions.length = response.meta.total_count;
        this.paginatorOptions.pageIndex = response.meta.current_page;
        this.data = response.data;
        this.passDataToParent();
      });
  }

  passDataToParent(): void {
    this.changePageOptionsEvent.emit(this.data);
  }

}
