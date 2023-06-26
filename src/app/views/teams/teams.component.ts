import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-team-list></app-team-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  title: string = 'Teams';
  introText: string = 'A list of all NBA teams sorted in alphabetical order';
  constructor() { }

  ngOnInit(): void {
  }

}
