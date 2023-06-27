import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { PaginatorInterface } from 'src/app/types/paginator-interface';
import { GamesResponse } from 'src/app/API/games-response';

@Component({
  selector: 'app-paginator',
  template: `
    <mat-paginator
      [length]="100"
      [pageSize]="10"
      [pageSizeOptions]="[5,10,25,50,100]"
      aria-label="Select page">
      ()
    </mat-paginator>
    <h2>{{meta.total_pages}}</h2>
    <button (click)="passPaginatorOptions()">Pass options</button>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() meta?: any;
  @Output() changePaginatorOptionsEvent = new EventEmitter<PaginatorInterface>();

  // meta: PaginatorInterface = {
  //   length: 100,
  //   pageSize: 10,
  //   pageSizeOptions: [5, 10, 25, 100]
  // }

  // meta: Meta = {
  //   total_pages:  100,
  //   current_page: 1,
  //   next_page:    2,
  //   per_page:     25,
  //   total_count:  100
  // }

  constructor() {
   }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

  passPaginatorOptions() {
    this.changePaginatorOptionsEvent.emit(this.meta)
  }

  // goToPrevPage() {
  //   console.log('called goToPrevPage()');
  //   this.page -= 1;
  //   console.log('this.page', this.page);
  //   // this.latestScoresItems = this.api.getLatestGames$(100, this.page);
  // }

  // goToNextPage() {
  //   console.log('called goToNextPage()');
  //   this.page += 1;
  //   console.log('this.page', this.page);
  //   // this.latestScoresItems = this.api.getLatestGames$(100, this.page);
  // }

}
