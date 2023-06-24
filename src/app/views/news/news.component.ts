import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <app-header [heading]="heading"></app-header>
    <app-news-list></app-news-list>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {
  heading: string = 'Latest news from NBA official website';
  
  constructor() {
    
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

}
