import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../types/news';
import { API } from './shared/api-variables';
import { NEWSKEY } from './shared/keys';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getInitialNews() {
    return this.httpClient.get<News[]>(`${API.NEWS_URL}?source=nba`, {
      headers: {
        'X-RapidAPI-Key': NEWSKEY,
        'X-RapidAPI-Host': API.NEWS_HOST,
      },
    });
  }

  getNews(source: string, player: string, team: string) {
    player = player === '' ? '' : `&player=${player}`;
    team = team === '' ? '' : `&team=${team}`;

    return this.httpClient.get<News[]>(
      `${API.NEWS_URL}?source=${source}${player}${team}`,
      {
        headers: {
          'X-RapidAPI-Key': NEWSKEY,
          'X-RapidAPI-Host': API.NEWS_HOST,
        },
      }
    );
  }
}
