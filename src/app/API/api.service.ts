import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesResponse } from './games-response';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getGames() {
    return this.httpClient.get<GamesResponse>('https://free-nba.p.rapidapi.com/games', {
      headers: {
        'X-RapidAPI-Key': 'c9cbb3c9e7msh9aa61fe6c842aa3p16bcf1jsnb868d2788b63'
      }
    })
  }
}
