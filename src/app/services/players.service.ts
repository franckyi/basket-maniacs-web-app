import { Injectable } from '@angular/core';
import { PlayerInputValues } from '../types/search-player-inputs';
import { HttpClient } from '@angular/common/http';
import { PaginatorInterface } from '../types/paginator-interface';
import { PlayersResponse } from '../types/players-response';
import { API } from './shared/api-variables';
import { KEY } from './shared/keys';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) {}

  searchPlayer(parameters: PlayerInputValues, paginatorOptions: PaginatorInterface) {

    if (parameters.playerName !== '' && parameters.teamName === '') {
      return this.httpClient.get<PlayersResponse>(
        `${API.BASE_URL}/players?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}&search=${parameters.playerName}`,
        { headers: { 'X-RapidAPI-Key': KEY } }
     )
    }

    else if (parameters.playerName !== '' && parameters.teamName !== '') {
      return this.httpClient.get<PlayersResponse>(
        `${API.BASE_URL}/players?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}&search=${parameters.playerName}`,
        { headers: { 'X-RapidAPI-Key': KEY } }
     )
      .pipe(
        map(response => {
          return {
            ...response,
            data: response.data.filter(player => {
              return player.team.full_name.toLowerCase().includes(parameters.teamName?.toLowerCase());
            })
          }
        })
     )
    }

    else {
      return this.httpClient.get<PlayersResponse>(
        `${API.BASE_URL}/players?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}`,
        { headers: { 'X-RapidAPI-Key': KEY } }
     )
    }
  }

  getPlayers(name: string, perPage: number = 100, getPage: number = 1) {

    let query: string | undefined;
    let limit: string = perPage ? 'per_page=' + perPage : 'per_page=' + 100;
    let page: number = getPage;
    query = limit + '&search=' + name;

    return this.httpClient.get<PlayersResponse>(`${API.BASE_URL}/players?page=${page}&${query}`, {
      headers: {
        'X-RapidAPI-Key': KEY
      }
    });
  }

}
