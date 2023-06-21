import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img class="logo" src="../../assets/img/logo.svg" alt="NBA app logo">
    </header>
    <mat-card>
      <mat-card-content>
        {{ heading }}
      </mat-card-content>
    </mat-card> 
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() heading?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
