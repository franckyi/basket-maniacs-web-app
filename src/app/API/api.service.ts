import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GamesResponse} from './games-response';
import {TeamsResponse} from './teams-response';
import {PlayersResponse} from './players-response';
import {map, shareReplay, switchMap} from "rxjs";
import {News} from './news';
import {PaginatorInterface} from '../types/paginator-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL  = 'https://free-nba.p.rapidapi.com';
  KEY       = 'befd1205e9mshc5b6271d340e520p18212ajsn969c844a4f9c';
  NEWS_URL  = `https://nba-latest-news.p.rapidapi.com/articles`;
  NEWS_KEY  = '0c008c7080msh10a514646ed797cp1182abjsn21ea7e48e462';
  NEWS_HOST = 'nba-latest-news.p.rapidapi.com';

  interface!: string;

  constructor(private httpClient: HttpClient) {
    
  }
  
  getAllGames(paginatorOptions: PaginatorInterface, typeOfData: string) {

    paginatorOptions.pageSize?? 10;

    return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/${typeOfData}?per_page=${paginatorOptions.pageSize}&page=${paginatorOptions.pageIndex}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }).pipe(
      map(response => {
        return {
          ...response,
          data: response.data.sort((prev, next) => {
            return new Date(next.date).getTime() - new Date(prev.date).getTime();
          })
        }
      }),
      shareReplay(),
    );
    
  }


  getInitialNews() {
    return this.httpClient.get<News[]>(`${this.NEWS_URL}?source=nba`, {
      headers: {
        'X-RapidAPI-Key': this.NEWS_KEY,
        'X-RapidAPI-Host': this.NEWS_HOST,
      }
    })
  }

  getNews(source: string) {
    return this.httpClient.get<News[]>(`${this.NEWS_URL}?source=${source}`, {
      headers: {
        'X-RapidAPI-Key': this.NEWS_KEY,
        'X-RapidAPI-Host': this.NEWS_HOST,
      }
    })
  }


  getGames$(season: string, perPage: number = 100) {
    let query: string | null = `&seasons[]=${season}`;
    perPage = perPage ?? 100;
    console.log('requesting URL: ', `${this.BASE_URL}/games?page=1&per_page=${perPage}${query}`)
    return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?page=1&per_page=${perPage}${query}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }


  getLastGames() {
    return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?per_page=10`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }).pipe(
      switchMap( response => {
        return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?per_page=10&page=${response.meta.total_pages}`, {
          headers: {
            'X-RapidAPI-Key': this.KEY
          }
        });
      }),
      map( response => {
        return {
          ...response,
          data: response.data.sort((prev, next) => {
            return new Date(next.date).getTime() - new Date(prev.date).getTime();
          })
        }
      }),
      shareReplay(),
    );
  }


  getTeams() {
    return this.httpClient.get<TeamsResponse>(`${this.BASE_URL}/teams`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }


  getPlayers(name: string, perPage: number = 100, getPage: number = 1) {
    let query: string | undefined;
    let limit: string = perPage ? 'per_page=' + perPage : 'per_page=' + 100;
    let page: number = getPage;
    query = limit + '&search=' + name;
    return this.httpClient.get<PlayersResponse>(`${this.BASE_URL}/players?page=${page}&${query}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }) 
  }
  

}
