import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <mat-form-field style="margin-left: 15px;">
        <mat-label for="name">Player name</mat-label>
        <input [(ngModel)]="playerName" matInput id="name" placeholder="First or last name">
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(playerName)" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <mat-card *ngIf="results !== null" class="search-results">
          <mat-card-content>
            <ul>
              <li *ngFor="let result of results; index as i">
              <div>{{ result.first_name }}</div>
              <div>{{ result.last_name }}</div>
              <div>{{ result.team.full_name }}</div>
              <div>{{ result.team.division }}</div>
              </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
    `,
  styleUrls: ['./search-player.component.scss']
})

export class SearchPlayerComponent implements OnInit {
  filters: any = [];
  playerName: string = '';
  playerId: string = '';
  results: any | undefined = null;
  
  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQuery (name: string) {
    console.log('called searchPlayer()');
    console.log('name:', name);
    this._api.getPlayers(name)
    .subscribe(
      (response) => {
        console.log('✅ found players', response)
        this.results = response.data;
      }
    );
  }
  
  resetFilters() {
    console.log('called resetFilters()')
  }

}

