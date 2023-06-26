import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
  @Input() meta?: object;
  @Input() pageSize?: number;
  page: number = 1;

  constructor() {
    console.log(this.meta)
   }

  ngOnInit(): void {
    console.log(this.meta)

  }

  ngOnChanges(): void {
    console.log(this.meta)
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
