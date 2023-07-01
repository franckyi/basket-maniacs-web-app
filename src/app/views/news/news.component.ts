import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <app-header [introText]="introText"></app-header>
    <app-news-list></app-news-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  introText: string = 'Get the latest news from NBA and ESPN. Use the filters to chooose a different source';
  
  constructor() {
    
  }

  ngOnInit(): void {

  }

}
