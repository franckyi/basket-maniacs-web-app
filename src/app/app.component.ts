import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-toolbar></app-toolbar>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'NBA News';
  
}
