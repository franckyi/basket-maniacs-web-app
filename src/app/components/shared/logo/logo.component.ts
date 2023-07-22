import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <span *ngIf="title" class="app-logo-text">
      <span class="app-icon">8</span> {{ title }}
    </span>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() title?: string;
  constructor() {}
}
