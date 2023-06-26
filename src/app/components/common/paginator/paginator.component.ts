import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
    <mat-paginator
      [length]="100"
      [pageSize]="25"
      [pageSizeOptions]="[5, 10, 25, 100]"
      aria-label="Select page">
    </mat-paginator>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() length?: number;
  @Input() pageSize?: number;
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
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
