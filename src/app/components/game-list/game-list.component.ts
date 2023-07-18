import { Component } from '@angular/core';
import { Game } from 'src/app/API/Game';

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    
    <app-spinner *ngIf="loading; else contentBlock"></app-spinner>

    <ng-template #contentBlock>
      <mat-list class="results__list">
        <app-game-list-item *ngFor="let game of data" [game]="game"></app-game-list-item>
      </mat-list>
    </ng-template>

    <app-paginator #paginator
      (changePageOptionsEvent)="refreshData($event)" >
    </app-paginator>

  `,
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {

  data: Game[] = [];
  loading: boolean = true;

  constructor() { }

  refreshData(data: Game[]) {
    this.data = data;
    this.loading = false;
  }

}
