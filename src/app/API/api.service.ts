import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GamesResponse} from './games-response';
import {TeamsResponse} from './teams-response';
import {PlayersResponse} from './players-response';
import {map, filter, shareReplay, switchMap, expand, EMPTY, reduce} from "rxjs";
import {News} from './news';
import {PaginatorInterface} from '../types/paginator-interface';
import { GameInputValues } from '../types/search-game-inputs';
import { PlayerInputValues } from '../types/search-player-inputs';

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

  getNews(source: string, player: string, team: string) {

    player = player === '' ? '' : `&player=${player}`;
    team   = team === ''   ? '' : `&team=${team}`;

    console.log('player', player);
    console.log('team', team);

    return this.httpClient.get<News[]>(`${this.NEWS_URL}?source=${source}${player}${team}`, {
      headers: {
        'X-RapidAPI-Key': this.NEWS_KEY,
        'X-RapidAPI-Host': this.NEWS_HOST,
      }
    })
  }


  getGames$(season: string, perPage: number = 100) {

    let query: string | null = `seasons[]=${season}`;

    console.log('requesting URL: ', `${this.BASE_URL}/games?page=1&per_page=${perPage}&${query}`);

    return this.httpClient.get<GamesResponse>(
      `${this.BASE_URL}/games?page=1&per_page=${perPage}&${query}`,
      { headers: { 'X-RapidAPI-Key': this.KEY } }
    )

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

  searchTeam(teamName: string) {

    console.log('called searchTeam() with value', teamName)

    return this.httpClient.get<TeamsResponse>(`${this.BASE_URL}/teams?per_page=100`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
    .pipe(
      map(
        response => response.data.filter( team => team.full_name.toLowerCase().includes(teamName.toLowerCase()))
      )
    )

  }


  searchGame( searchParameters: GameInputValues ) {

    console.log('searchParameters:', searchParameters)

    let query: string = `${this.BASE_URL}/games?page=1&per_page=100&seasons[]=${searchParameters.season}`;

    if ( typeof searchParameters.homeTeamId !== 'undefined' ) {
      query = query.concat( '&team_ids[]=' + searchParameters.homeTeamId.toString() );
    }
    
    if ( typeof searchParameters.visitorTeamId !== 'undefined' ) {
      query = query.concat( '&team_ids[]=' + searchParameters.visitorTeamId.toString() );
    }

    console.log('query:', query)

    return this.httpClient.get<GamesResponse>(
      query,
      { headers: { 'X-RapidAPI-Key': this.KEY } }
    )
    .pipe(
      map( response => {

        if ( typeof searchParameters.homeTeamId !== 'undefined' && typeof searchParameters.visitorTeamId === 'undefined' ) {
          console.log('only home is valid');
          return {
            ...response,
            data: response.data.filter( game => game.home_team.id === searchParameters.homeTeamId)
          }
        }
        else if ( typeof searchParameters.homeTeamId === 'undefined' && typeof searchParameters.visitorTeamId !== 'undefined' ) {
          console.log('only visitor is valid');
          return {
            ...response,
            data: response.data.filter( game => game.visitor_team.id === searchParameters.visitorTeamId)
          }
        }
        else if ( typeof searchParameters.homeTeamId !== 'undefined' && typeof searchParameters.visitorTeamId !== 'undefined' ) {
          console.log('both ids are valid');
          
          return {
            ...response,
            data: response.data.filter( game => {
              return (game.home_team.id === searchParameters.homeTeamId) &&
              (game.visitor_team.id === searchParameters.visitorTeamId);
            })
          }
        }
        else {
          console.log('only season is valid');

          return {
            ...response,
            data: response.data.filter( game => game.season.toString() === searchParameters.season )
          }

        }
        
      })

    )
    

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
    });

  }

  searchPlayer(parameters: PlayerInputValues, paginatorOptions: PaginatorInterface) {

    console.log('called searchPlayer()');
    console.log('parameters', parameters);

    if ( parameters.playerName !== '' && parameters.teamName === '' ) {
      return this.httpClient.get<PlayersResponse>(
        `${this.BASE_URL}/players?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}&search=${parameters.playerName}`,
        { headers: { 'X-RapidAPI-Key': this.KEY } }
      )
    }

    else if ( parameters.playerName !== '' && parameters.teamName !== '' ) {
      return this.httpClient.get<PlayersResponse>(
        `${this.BASE_URL}/players?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}&search=${parameters.playerName}`,
        { headers: { 'X-RapidAPI-Key': this.KEY } }
      )
      .pipe(
        map( response => {
          return {
            ...response,
            data: response.data.filter( player => {
              return player.team.full_name.toLowerCase().includes( parameters.teamName?.toLowerCase() );
            } )
          }
        })
      )
    }

    else {
      return this.httpClient.get<PlayersResponse>(
        `${this.BASE_URL}/players?page=${paginatorOptions.pageIndex}&per_page=${paginatorOptions.pageSize}`,
        { headers: { 'X-RapidAPI-Key': this.KEY } }
      )
    }
  }
  

}
