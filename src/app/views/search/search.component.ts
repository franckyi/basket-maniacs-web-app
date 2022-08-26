import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public isActivePlayerFilter: boolean = false;
  public isActiveTeamFilter: boolean = false;
  public isActiveGameFilter: boolean = false;
  public isActiveNewsFilter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
