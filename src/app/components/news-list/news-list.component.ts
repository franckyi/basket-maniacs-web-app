import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Observable } from "rxjs";
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news-list',
  template: `
    <h2 class="section-heading">Last news</h2>
    <mat-list class="results__list">
      <mat-list-item class="results__item news"
        *ngFor="let item of (newsList | async) | slice:0:perPage"
      >
        <div matBadge="{{item.source}}" matBadgeColor="accent" matBadgeOverlap="false">{{ item.title }}</div>
        <a [href]="item.url" target="_blank" rel="nofollow">Read</a>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {
  @Input() perPage?: number;
  newsList: Observable<News[]>;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private api: ApiService) {
    this.newsList = api.getNews();
    console.log('news perPage:', this.perPage);
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log('news perPage:', this.perPage);
  }

}
