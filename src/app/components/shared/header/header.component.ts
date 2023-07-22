import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <app-logo [title]="title"></app-logo>
    </header>
    <mat-card class="intro-text" *ngIf="introText">
      <mat-card-content>{{introText}}</mat-card-content>
    </mat-card> 
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() introText?: string;
  @Input() title?: string;
  constructor() {}
}