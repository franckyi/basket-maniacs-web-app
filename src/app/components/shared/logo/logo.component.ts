import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img
      src="../../../../assets/img/bm-logo.svg"
      class="app-logo"
      [height]="logoHeight"
      [width]="logoWidth"
      alt="Basket Maniacs logo">
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() logoWidth?: number;
  @Input() logoHeight?: number;
  constructor() {}
}
