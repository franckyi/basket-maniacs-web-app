import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Observable} from "rxjs";
import { ApiService } from 'src/app/API/api.service';
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news',
  template: `
    <app-header [heading]="heading"></app-header>
    <mat-list>
      <mat-list-item *ngFor="let result of (latestNews | async)">
        <span matListItemTitle>{{ result.title }}</span>
        <a [href]="result.url" target="_blank" rel="nofollow">Read on nba.com</a>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {
  heading: string = 'Latest news from NBA official website';
  latestNews: Observable<News[]>;
  
  constructor(private api: ApiService) {
    this.latestNews = api.getNews();
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

}
