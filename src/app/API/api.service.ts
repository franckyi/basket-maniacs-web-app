import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GamesResponse} from './games-response';
import {TeamsResponse} from './teams-response';
import {PlayersResponse} from './players-response';
import {StatsResponse} from './stats-response';
import {map, shareReplay, switchMap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getGames() {
    return this.httpClient.get<GamesResponse>('https://free-nba.p.rapidapi.com/games?seasons[]=2021', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    })
  }

  getLatestGames$() {
    return this.httpClient.get<GamesResponse>('https://free-nba.p.rapidapi.com/games?seasons[]=2021&per_page=10', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    }).pipe(
      switchMap(
        value => {
          return this.httpClient.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?seasons[]=2021&per_page=10&page=${value.meta.total_pages}`, {
            headers: {
              'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
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
    return this.httpClient.get<GamesResponse>('https://free-nba.p.rapidapi.com/games?seasons[]=2021&per_page=1', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    }).pipe(
      switchMap(
        value => {
          return this.httpClient.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?seasons[]=2021&per_page=1&page=${value.meta.total_pages}`, {
            headers: {
              'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
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
    return this.httpClient.get<TeamsResponse>('https://free-nba.p.rapidapi.com/teams', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    })
  }

  getPlayers() {
    return this.httpClient.get<PlayersResponse>('https://free-nba.p.rapidapi.com/players', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    })
  }

  getStats() {
    return this.httpClient.get<StatsResponse>('https://free-nba.p.rapidapi.com/stats', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    })
  }

}
