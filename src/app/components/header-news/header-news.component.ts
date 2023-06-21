import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-news',
  template: `
    <header>
      <img class="logo" src="../../assets/img/logo.svg" alt="NBA app logo">
    </header>
    <p class="box--orange">
        Latest news from NBA
    </p>
  `,
  styleUrls: ['./header-news.component.scss']
})
export class HeaderNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
