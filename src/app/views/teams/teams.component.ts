import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-teams-list></app-teams-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  title: string = 'Teams list';
  introText: string = 'A list of all NBA teams';
  constructor() { }

  ngOnInit(): void {
  }

}
