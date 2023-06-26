import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
    <!-- REMOVE <div class="pagination">
      <mat-icon aria-hidden="false" aria-label="Previous page" fontIcon="navigate_before"
        *ngIf="page > 1"
        (click)="goToPrevPage()"
      ></mat-icon>
        <span>{{ page }}</span>
      <mat-icon aria-hidden="false" aria-label="Next page" fontIcon="navigate_next"
        (click)="goToNextPage()"></mat-icon>
    </div> -->
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
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  goToPrevPage() {
    console.log('called goToPrevPage()');
    this.page -= 1;
    console.log('this.page', this.page);
    // this.latestScoresItems = this.api.getLatestGames$(100, this.page);
  }

  goToNextPage() {
    console.log('called goToNextPage()');
    this.page += 1;
    console.log('this.page', this.page);
    // this.latestScoresItems = this.api.getLatestGames$(100, this.page);
  }

}
