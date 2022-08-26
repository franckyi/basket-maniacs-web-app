import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../API/api.service";
import {Observable} from "rxjs";
import {TeamsResponse} from "../../API/teams-response";

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss']
})
export class AllTeamsComponent implements OnInit {

  AllTeamsItems: Observable<TeamsResponse>;

  constructor(private api: ApiService) {
    this.AllTeamsItems = api.getTeams();
   }

  ngOnInit(): void {
  }

}
