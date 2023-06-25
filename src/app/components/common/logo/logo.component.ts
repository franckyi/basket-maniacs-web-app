import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <span *ngIf="title" class="app-logo-text">
      <span class="app-icon">8</span> {{ title }}
    </span>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() title?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
