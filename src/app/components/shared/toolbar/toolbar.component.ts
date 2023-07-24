import { Component, Input, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
// import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {

  // @Input() color: ThemePalette;
  
  currentRoute?: string;
  event$;
  accent: string = 'accent';

  constructor(private router: Router) {
    this.event$ = this.router.events.subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          this.currentRoute = event.url;
        }
      });
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

}
