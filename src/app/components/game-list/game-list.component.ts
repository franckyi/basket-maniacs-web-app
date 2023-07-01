import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    
    <div class="spinner-container" *ngIf="loading; else gamesContentBlock">
      <mat-spinner></mat-spinner>
    </div>

    <ng-template #gamesContentBlock>
    
      <mat-list class="results__list">
        <app-game-list-item *ngFor="let game of data" [game]="game"></app-game-list-item>
      </mat-list>

    </ng-template>

    <app-paginator
      [loading]="loading"
      (updateLoadingEvent)="updateLoadingState($event)"
      (changePageOptionsEvent)="refreshData($event)">
    </app-paginator>

  `,
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {

  data?: any[];
  loading: boolean = false;

  constructor() { }

  refreshData(data: any[]) {
    this.data = data;
  }

  updateLoadingState($event: boolean) {
    this.loading = $event;
  }

}
