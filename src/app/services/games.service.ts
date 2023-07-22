import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatorInterface } from '../types/paginator-interface';
import { map, shareReplay, switchMap } from 'rxjs';
import { GamesResponse } from '../types/games-response';
import { GameInputValues } from '../types/search-game-inputs';
import { API } from './shared/api-variables';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) {}

  searchGame(searchParameters: GameInputValues) {
    let query: string = `${API.BASE_URL}/games?page=1&per_page=100&seasons[]=${searchParameters.season}`;

    if (typeof searchParameters.homeTeamId !== 'undefined') {
      query = query.concat('&team_ids[]=' + searchParameters.homeTeamId.toString());
    }
    
    if (typeof searchParameters.visitorTeamId !== 'undefined') {
      query = query.concat('&team_ids[]=' + searchParameters.visitorTeamId.toString());
    }

    return this.httpClient.get<GamesResponse>(
      query,
      { headers: { 'X-RapidAPI-Key': API.KEY } }
    )
    .pipe(
      map(response => {

        if (typeof searchParameters.homeTeamId !== 'undefined' && typeof searchParameters.visitorTeamId === 'undefined') {
          return {
            ...response,
            data: response.data.filter(game => game.home_team.id === searchParameters.homeTeamId)
          }
        }
        else if (typeof searchParameters.homeTeamId === 'undefined' && typeof searchParameters.visitorTeamId !== 'undefined') {
          return {
            ...response,
            data: response.data.filter(game => game.visitor_team.id === searchParameters.visitorTeamId)
          }
        }
        else if (typeof searchParameters.homeTeamId !== 'undefined' && typeof searchParameters.visitorTeamId !== 'undefined') {
          
          return {
            ...response,
            data: response.data.filter(game => {
              return (game.home_team.id === searchParameters.homeTeamId) &&
              (game.visitor_team.id === searchParameters.visitorTeamId);
            })
          }
        }
        else {
          return {
            ...response,
            data: response.data.filter(game => game.season.toString() === searchParameters.season)
          }

        }
      })
    )
  }

  getAllGames(paginatorOptions: PaginatorInterface, typeOfData: string) {
    paginatorOptions.pageSize?? 10;

    return this.httpClient.get<GamesResponse>(`${API.BASE_URL}/${typeOfData}?per_page=${paginatorOptions.pageSize}&page=${paginatorOptions.pageIndex}`, {
      headers: {
        'X-RapidAPI-Key': API.KEY
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

  getGames$(season: string, perPage: number = 100) {
    let query: string | null = `seasons[]=${season}`;
    return this.httpClient.get<GamesResponse>(
      `${API.BASE_URL}/games?page=1&per_page=${perPage}&${query}`,
      { headers: { 'X-RapidAPI-Key': API.KEY } }
    )
  }

  getLastGames() {
    return this.httpClient.get<GamesResponse>(`${API.BASE_URL}/games?per_page=10`, {
      headers: {
        'X-RapidAPI-Key': API.KEY
      }
    }).pipe(
      switchMap(response => {
        return this.httpClient.get<GamesResponse>(`${API.BASE_URL}/games?per_page=10&page=${response.meta.total_pages}`, {
          headers: {
            'X-RapidAPI-Key': API.KEY
          }
        });
      }),
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
  
}
