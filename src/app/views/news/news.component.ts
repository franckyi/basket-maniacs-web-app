import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <app-header [introText]="introText"></app-header>
    <h2>Latest news</h2>
    <app-news-list class="news-group"></app-news-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  introText: string = 'Use the filters to chooose your favorite news provider';
  constructor() {}
}
