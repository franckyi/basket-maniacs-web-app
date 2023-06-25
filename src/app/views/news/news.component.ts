import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-news-list></app-news-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {
  title: string = 'News';
  introText: string = 'Latest news from NBA official website';
  
  constructor() {
    
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

}
