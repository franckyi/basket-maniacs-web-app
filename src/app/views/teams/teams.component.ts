import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-team-list class="teams-group"></app-team-list>
    <app-footer></app-footer>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  title: string = 'Teams';
  introText: string = 'All NBA teams';

  constructor() {}
  
}
