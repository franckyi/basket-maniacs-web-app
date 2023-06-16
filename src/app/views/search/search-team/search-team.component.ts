import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/API/api.service';
import { Team } from 'src/app/API/Team';

export interface TeamsData {
  "id": number,
  "abbreviation": string,
  "city": string,
  "conference": string,
  "division": string,
  "full_name": string,
  "name": string
}

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-team',
  template: `
    <div class="search">
      <mat-form-field style="margin-left: 15px;">
        <mat-label>Team name</mat-label>
        <input #teamName matInput>
      </mat-form-field>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(teamName.value)" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      <mat-card *ngIf="results !== null" class="search-results">
          <mat-card-content>
            <ul>
              <li *ngFor="let result of results; index as i">
              <div>{{ result.full_name }}</div>
              <div>{{ result.abbreviation }}</div>
              <div>{{ result.city }}</div>
              <div>{{ result.division }}</div>
              </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./search-team.component.scss']
})
export class SearchTeamComponent implements OnInit {

    filterValues: any = {};
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['full_name', 'abbreviation', 'city'];
    results: any | undefined = null;

    filterSelectObj: any = [];

  constructor(private _api: ApiService) {}

  ngOnInit() {}

  passQuery (name: string) {
    console.log('called passQuery()');
    console.log('name:', name);
    this._api.getTeams()
    .subscribe(
      (response) => {
        this.results = response.data.filter( 
          (team: Team) => team.full_name.toLowerCase().includes(name.toLowerCase())
        );
        console.log('✅ filtered teams', this.results)
      }
    );
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: number) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
}
