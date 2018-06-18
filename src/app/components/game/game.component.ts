import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Game} from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() public game: Game;
  @Output() public selectedGameEvent: EventEmitter<Game> = new EventEmitter();

  constructor() {
    console.log("uso u game const")
   }

  ngOnInit() {
  }

  selectGame(){
    this.selectedGameEvent.emit(this.game)
  }
}
