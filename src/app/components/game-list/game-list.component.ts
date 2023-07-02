import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  template: `
    <h2 class="section-heading">Game results</h2>
    
    <div class="spinner-container" *ngIf="loading; else contentBlock">
      <mat-spinner></mat-spinner>
    </div>

    <ng-template #contentBlock>
    
      <mat-list class="results__list">
        <app-game-list-item *ngFor="let game of data" [game]="game"></app-game-list-item>
      </mat-list>

    </ng-template>

    <app-paginator #paginator
      (changePageOptionsEvent)="refreshData($event)">
    </app-paginator>

  `,
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {

  data?: any[];
  loading: boolean = true;

  constructor() { }

  refreshData(data: any[]) {
    this.loading = true;
    this.data = data;
    this.loading = false;
  }

}
