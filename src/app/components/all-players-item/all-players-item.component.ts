import { Component, Input, OnInit } from '@angular/core';
import {Players} from "../../API/players";

@Component({
  selector: 'app-all-players-item',
  templateUrl: './all-players-item.component.html',
  styleUrls: ['./all-players-item.component.scss']
})
export class AllPlayersItemComponent implements OnInit {

  @Input() player?: Players;

  constructor() { }

  ngOnInit(): void {
  }

}
