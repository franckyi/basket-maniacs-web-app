import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { ApiService } from 'src/app/API/api.service';
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news',
  template: `
    <app-header-news></app-header-news>
    <mat-list>
      <mat-list-item *ngFor="let result of (latestNews | async)">
        <span matListItemTitle>{{ result.title }}</span>
        <a [href]="result.url" target="_blank" rel="nofollow">Read on nba.com</a>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  latestNews: Observable<News[]>;

  constructor(private _api: ApiService) {
    this.latestNews = _api.getNews();
  }

  ngOnInit(): void {
    this.latestNews.subscribe( response => {
      console.log(response);
    })
  }

}
