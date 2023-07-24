import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/types/news';
import { SearchNewsInputs } from 'src/app/types/search-news-inputs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input() perPage?: number;
  newsList?: Observable<News[]>;
  searchParameters: SearchNewsInputs = {
    player: '',
    team: '',
    source: 'nba'
  };
  sources: string[] = [ 'nba-canada', 'nba', 'bleacher-report', 'espn', 'slam' ]
  selectedSource?: string = 'nba';
  hidden = false;
  loading: boolean = true;
  panelOpenState = false;

  constructor(private news: NewsService) {}

  ngOnInit(): void {
    this.newsList = this.news.getInitialNews();
    this.newsList.subscribe(response => {
      if (response) this.loading = false;
    });
  }

  changeProvider($event: any): void {
    this.searchParameters.source = $event.value;
    this.getNews();
  }

  getNews(): void {
    this.loading = true;
    this.newsList = this.news.getNews(this.searchParameters.source ?? 'nba', this.searchParameters.player, this.searchParameters.team);
    this.newsList.subscribe(response => {
      if (response) this.loading = false;
    });
  }

}
