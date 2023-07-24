import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <app-header [introText]="introText"></app-header>
    <h2>Latest news</h2>
    <app-news-list></app-news-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  introText: string = `The latest news from a variety of online sources.
    Use the filters to chooose your favorite provider`;
  constructor() {}
}
