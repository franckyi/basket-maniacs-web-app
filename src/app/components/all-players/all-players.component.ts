import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Player} from "../../API/Player";
import {Observable} from "rxjs";
import {PlayersResponse} from "../../API/players-response";
import { AllPlayersItemComponent } from './all-players-item/all-players-item.component';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.scss']
})
export class AllPlayersComponent implements OnInit {

  AllPlayersItems: Observable<PlayersResponse>;

  constructor(private api: ApiService) {
    this.AllPlayersItems = api.getPlayers();
   }

  ngOnInit(): void {
  }

}
