import { Component, OnInit, } from '@angular/core';
import {Game} from '../../models/game';
import {Store} from '@ngrx/store';
import {State } from '../../store';
import GamesService from '../../services/utakmica.services';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  game:Game = new Game(null,"", "",0,0);

  constructor(
    private store$: Store<State>,
    private GamesService: GamesService) { }

  ngOnInit() {
    
  }

  onAddGame() {
      this.GamesService.addGame(this.game);
      this.game.home="";
      this.game.guest="";
  }

}
