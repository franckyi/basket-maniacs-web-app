import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <mat-card class="intro-text" *ngIf="introText">
        <mat-card-content>{{introText}}</mat-card-content>
      </mat-card> 
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() introText?: string;
  constructor() {}
}
