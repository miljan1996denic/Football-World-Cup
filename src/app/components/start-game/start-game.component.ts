import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Game} from '../../models/game';
import {Store} from '@ngrx/store';
import {State } from '../../store';
import {addGame,fetch} from '../../store/actions';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  game:Game = new Game(null, false, "", "",0,0,0);

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    
  }

  onAddGame() {
      console.log("afafafa",this.game);
      this.store$.dispatch(new addGame(this.game));
  }

}
