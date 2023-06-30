import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GamesResponse} from './games-response';
import {TeamsResponse} from './teams-response';
import {PlayersResponse} from './players-response';
import {StatsResponse} from './stats-response';
import {map, shareReplay, switchMap} from "rxjs";
import {News} from './news';
import { Meta } from './meta';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorInterface } from '../types/paginator-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL  = 'https://free-nba.p.rapidapi.com';
  KEY       = 'befd1205e9mshc5b6271d340e520p18212ajsn969c844a4f9c';
  NEWS_URL  = `https://nba-latest-news.p.rapidapi.com/articles?source=nba`;
  NEWS_KEY  = '0c008c7080msh10a514646ed797cp1182abjsn21ea7e48e462';
  NEWS_HOST = 'nba-latest-news.p.rapidapi.com';

  interface!: string;

  constructor(private httpClient: HttpClient) {
  }
  
  getServerData(paginatorOptions: PaginatorInterface, typeOfData: string) {

    // if (typeOfData === 'games') {
      return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/${typeOfData}?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}`, {
        headers: {
          'X-RapidAPI-Key': this.KEY
        }
      })
    // }

    // else if (typeOfData === 'players') {
    //   return this.httpClient.get<PlayersResponse>(`${this.BASE_URL}/${typeOfData}?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}`, {
    //     headers: {
    //       'X-RapidAPI-Key': this.KEY
    //     }
    //   })
    // }

    // else if (typeOfData === 'teams') {
    //   return this.httpClient.get<TeamsResponse>(`${this.BASE_URL}/${typeOfData}?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}`, {
    //     headers: {
    //       'X-RapidAPI-Key': this.KEY
    //     }
    //   })
    // }

    // else if (typeOfData === 'news') {
    //   return this.httpClient.get<News[]>(this.NEWS_URL, {
    //     headers: {
    //       'X-RapidAPI-Key': this.NEWS_KEY,
    //       'X-RapidAPI-Host': this.NEWS_HOST,
    //     }
    //   })
    // }
    
  }


  getNews() {
    return this.httpClient.get<News[]>(this.NEWS_URL, {
      headers: {
        'X-RapidAPI-Key': this.NEWS_KEY,
        'X-RapidAPI-Host': this.NEWS_HOST,
      }
    })
  }


  getGames(season: string, perPage: number = 100) {
    let query: string | null = `&seasons[]=${season}`;
    perPage = perPage ?? 100;
    console.log('requesting URL: ', `${this.BASE_URL}/games?page=1&per_page=${perPage}${query}`)
    return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?page=1&per_page=${perPage}${query}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }

  getGames$(perPage: number = 50, page: number = 1) {
    return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?per_page=${perPage}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }).pipe(
      switchMap(
        (value) => {
          page = value.meta.total_pages - (page);
          return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?per_page=${perPage}&page=${page}`, {
            headers: {
              'X-RapidAPI-Key': this.KEY
            }
          });
        }
      ),
      map(value => {
        return {
          ...value,
          data: value.data.sort((firstGame, secondGame) => {
            return new Date(secondGame.date).getTime() - new Date(firstGame.date).getTime();
          })
        }
      }),
      shareReplay(),
    );
  }

  getLastGame$() {
    return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?seasons[]=2021&per_page=1`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }).pipe(
      switchMap(
        value => {
          return this.httpClient.get<GamesResponse>(`${this.BASE_URL}/games?seasons[]=2021&per_page=1&page=${value.meta.total_pages}`, {
            headers: {
              'X-RapidAPI-Key': this.KEY
            }
          });
        }
      ),
      map(value => {
        return {
          ...value,
          data: value.data.sort((firstGame, secondGame) => {
            return new Date(secondGame.date).getTime() - new Date(firstGame.date).getTime();
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

  getStats() {
    return this.httpClient.get<StatsResponse>(`${this.BASE_URL}/stats`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }

}
