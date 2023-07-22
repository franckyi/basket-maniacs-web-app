import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnDestroy {

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
