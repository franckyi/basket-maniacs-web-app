import { Component, Input } from '@angular/core';
import {Team} from "../../../types/team";

@Component({
  selector: 'app-team-list-item',
  template: `
    <li class="results__item team">
      <span class="team__score">
        {{ team?.full_name | uppercase }} ({{ team?.abbreviation }}), {{ team?.division }} division
      </span>
      <img
        class="team__logo"
        src="../../assets/img/team-logos/{{ team?.abbreviation }}.png"
        [alt]="team?.full_name + ' logo'"
      >
    </li>
  `,
  styleUrls: ['./team-list-item.component.scss']
})
export class TeamListItemComponent {

  @Input() team?: Team;

  constructor() {}

}
