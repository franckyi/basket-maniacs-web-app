import { Component, Input } from '@angular/core';
import {Team} from "../../../API/Team";

@Component({
  selector: 'app-all-teams-item',
  template: `
    <li class="results__item team">
      <span class="team__score">{{ team?.full_name | uppercase }} ({{ team?.abbreviation }}), {{ team?.division }} division</span>
      <img
        class="team__logo"
        src="../../assets/img/team-logos/{{ team?.abbreviation }}.svg"
        [alt]="team?.full_name + ' logo'"
      >
    </li>
  `,
  styleUrls: ['./all-teams-item.component.scss']
})
export class AllTeamsItemComponent {
  @Input() team?: Team;

  constructor() { }

}
