import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { PaginatorInterface } from 'src/app/types/paginator-interface';
import { Meta } from 'src/app/API/meta'; 
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  template: `
    <mat-paginator
      [length]="meta?.total_count"
      [pageSize]="meta?.per_page"
      [pageSizeOptions]="[10,25,50,100]"
      [pageIndex]="meta?.current_page"
      aria-label="Select page"
    >
    </mat-paginator>
    <h2>{{meta?.per_page}} per page</h2>
    <h2>current page {{meta?.current_page}}</h2>
    <h2>next page {{meta?.next_page}}</h2>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  @Input() meta?: Meta;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

}
