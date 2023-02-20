import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

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
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.scss']
})
export class SearchTeamComponent implements OnInit {

    filterValues: any = {};
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['full_name', 'abbreviation', 'city'];

    filterSelectObj: any = [];

  constructor() {

      // Object to create Filter for
      this.filterSelectObj = [
        {
          name: 'Team Name',
          columnProp: 'full_name',
          options: []
        },
        {
          name: 'City',
          columnProp: 'city',
          options: []
        }
      ]
   }

  ngOnInit() {
    // this.getRemoteData();

    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

    // Get Uniqu values from columns to build filter
    getFilterObject(fullObj: any, key: any) {
        const uniqChk: any[] = [];
        fullObj.filter((obj: { [x: string]: any; }) => {
          if (!uniqChk.includes(obj[key])) {
            uniqChk.push(obj[key]);
          }
          return obj;
        });
        return uniqChk;
      }

  // TODO: Get remote serve data using HTTP call
  // getRemoteData() {
  // }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    // let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

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


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: number) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
}
