import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  template: `
    <app-all-teams></app-all-teams>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
