import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.scss']
})
export class SearchTeamComponent {

  results?: Observable<Team[]>;
  teamName: string    = '';
  notFoundMsg: string = '';
  loading: boolean    = false;

  constructor(private teams: TeamsService) {}

  search(name: string) {
    this.results = this.teams.searchTeam(name);
    this.results?.subscribe(
      response => { if (response) this.loading = false }
   )
  }

  emptyNotFoundMsg() {
    this.notFoundMsg = '';
  }

  resetFilters() {
    this.teamName = '';
    this.results  = of([]);
  }
  
}
