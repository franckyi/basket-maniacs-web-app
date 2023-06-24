import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import {Observable} from "rxjs";
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let item of (newsList | async)">
        <span matListItemTitle>{{ item.title }}</span>
        <a [href]="item.url" target="_blank" rel="nofollow">Read on nba.com</a>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList: Observable<News[]>;
  
  constructor(private api: ApiService) {
    this.newsList = api.getNews();
  }

  ngOnInit(): void {
  }

}
