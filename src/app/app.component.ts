import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-toolbar class="toolbar"></app-toolbar>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Basket Maniacs';
  
}
