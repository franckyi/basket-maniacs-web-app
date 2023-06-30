import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { Meta } from 'src/app/API/meta'; 
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  template: `
    <mat-paginator
      [length]="meta?.total_count"
      [pageSize]="meta?.per_page"
      [pageSizeOptions]="[10,50,100]"
      [pageIndex]="meta?.current_page"
      aria-label="Select page"
      (page)="passOptions($event)">
    </mat-paginator>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  @Input() meta?: Meta;
  // @Input() totalCount?: number;
  @Output() onPageChangeEvent = new EventEmitter<PageEvent>();

  pageEvent?: PageEvent;

  constructor() {
  }

  ngOnInit(): void {

  }

  passOptions(event: PageEvent) {
    // console.log('passing options:', value)
    this.onPageChangeEvent.emit(event)
  }

  ngAfterViewInit(): void {
  }

}
