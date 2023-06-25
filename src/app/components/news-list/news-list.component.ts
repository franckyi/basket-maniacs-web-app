import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Observable } from "rxjs";
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news-list',
  template: `
    <h2 class="section-heading">Last news</h2>
    <mat-list class="results__list">
      <a [href]="item.url" *ngFor="let item of (newsList | async) | slice:0:perPage" target="_blank" rel="nofollow">
        <mat-list-item class="results__item news">
          <div matBadge="{{item.source}}" matBadgeColor="accent" matBadgeOverlap="false">{{ item.title }}</div>
        </mat-list-item>
      </a>
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
    console.log(this.newsList.subscribe(v => console.log(v)));
  }

}
