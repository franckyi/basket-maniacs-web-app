import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Observable } from "rxjs";
import { News } from 'src/app/API/news';

@Component({
  selector: 'app-news-list',
  template: `
    <h2 class="section-heading">Last news</h2>

    <label id="radio-group-label">Pick a news provider</label>
    <mat-radio-group
      aria-labelledby="radio-group-label"
      class="radio-group"
      (change)="changeProvider($event)"
      [(ngModel)]="selectedSource">
      <mat-radio-button class="radio-button" *ngFor="let source of sources" [value]="source">
        {{source}}
      </mat-radio-button>
    </mat-radio-group>
    <div>Your currently viewing news from <strong>{{selectedSource}}</strong></div>

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
export class NewsListComponent implements OnInit, AfterViewInit {

  @Input() perPage?: number;

  newsList?: Observable<News[]>;

  sources: string[] = [ 'nba-canada', 'nba', 'bleacher-report', 'espn', 'slam' ]
  selectedSource?: string;
  
  hidden = false;

  constructor(private api: ApiService) {
    
  }

  ngOnInit(): void {
    this.newsList = this.api.getInitialNews();
  }

  changeProvider($event: any) {
    this.selectedSource = $event.value;
    this.newsList = this.api.getNews(this.selectedSource?? 'nba');
  }

  ngAfterViewInit(): void {

  }

}
