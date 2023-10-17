import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamsResponse } from '../types/teams-response';
import { API } from './shared/api-variables';
import { KEY } from './shared/keys';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private httpClient: HttpClient) {}

  searchTeam(teamName: string) {
    return this.httpClient
      .get<TeamsResponse>(`${API.BASE_URL}/teams?per_page=100`, {
        headers: {
          'X-RapidAPI-Key': KEY,
        },
      })
      .pipe(
        map((response) =>
          response.data.filter((team) =>
            team.full_name.toLowerCase().includes(teamName.toLowerCase())
          )
        )
      );
  }

  getTeams() {
    return this.httpClient.get<TeamsResponse>(`${API.BASE_URL}/teams`, {
      headers: {
        'X-RapidAPI-Key': KEY,
      },
    });
  }
}
