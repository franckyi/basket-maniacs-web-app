import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from "rxjs";
import { PlayersResponse } from 'src/app/API/players-response';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <mat-form-field style="margin-left: 15px;">
        <mat-label for="filter.columnProp">{{filters[0].name}}</mat-label>
        <input [(ngModel)]="playerName" matInput id="{{filters[0].columnProp}}">
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
  SearchPlayerResults: Observable<PlayersResponse>;
  filterValues: any = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['first_name', 'last_name', 'team'];
  filters: any = [];
  playerName: string = '';
  playerId: string = '';
  results: any | undefined = null;
  
  constructor(private _api: ApiService) {
    
    interface PlayerResults {
      'first_name': string;
      'last_name': string;
      'team': string;
    }
    
    this.SearchPlayerResults = _api.getPlayers('');

    // Array of filters
    this.filters = [
      {
        name: 'First or last name',
        columnProp: 'name',
        value: ''
      },
    ]
  }

  ngOnInit() {
    this.dataSource.filterPredicate = this.createFilter();
  }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;

      for (const col in searchTerms) {

        if (searchTerms[col].toString() === '')
             { delete searchTerms[col]; }
        else { isFilterSet = true; }

      }

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word: any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }

    return filterFunction
  }

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
  
  // Reset table filters
  resetFilters() {
    console.log('called resetFilters()')
    this.filterValues = {}
    this.filters.forEach((value: any, key: number) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }


}

