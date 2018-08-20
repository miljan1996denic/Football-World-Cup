import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Game} from '../../models/game';
import {Store} from '@ngrx/store';
import {State } from '../../store';
import GamesService from '../../services/utakmica.services';
import {deleteGame} from '../../store/actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() public game: Game;
  @Output() public selectedGameEvent: EventEmitter<Game> = new EventEmitter();

  constructor(
    private store$:Store<State>,
    private GamesService: GamesService
  ) {
   }

  ngOnInit() {
  }

  selectGame(){
    this.selectedGameEvent.emit(this.game)
  }
  deleteGame(){
      this.store$.dispatch(new deleteGame(this.game.id));
      this.GamesService.deleteGame(this.game.id);
  }
}
