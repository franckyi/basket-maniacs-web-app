import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  activateFilterPlayer() {
    // isActivePlayerFilter = true;
  }

  activateFilterTeam() {

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
