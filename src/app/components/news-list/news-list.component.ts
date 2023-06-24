import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Observable } from "rxjs";
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news-list',
  template: `
    <h1 class="section-heading">News</h1>
    <mat-list>
      <mat-list-item *ngFor="let item of (newsList | async) | slice:0:perPage">
        <span matListItemTitle>{{ item.title }}</span>
        <a [href]="item.url" target="_blank" rel="nofollow">Read on nba.com</a>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {
  @Input() perPage?: number;
  newsList: Observable<News[]>;
  
  constructor(private api: ApiService) {
    this.newsList = api.getNews();
    console.log('news perPage:', this.perPage);
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log('news perPage:', this.perPage);
  }

}
