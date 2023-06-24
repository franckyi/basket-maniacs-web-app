import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <app-header [heading]="heading"></app-header>
    <app-teams-list></app-teams-list>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  heading: string = 'See more information about a team';
  constructor() { }

  ngOnInit(): void {
  }

}
