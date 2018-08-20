import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game';
import {Store} from '@ngrx/store';
import {State } from '../../store';
import {selectGame, getGames, SearchGames,ClearState } from '../../store/actions';
import { Observable } from 'rxjs';
import {selectors} from '../../store/reducers/games.reducer';

@Component({
  selector: 'app-finished-games',
  templateUrl: './finished-games.component.html',
  styleUrls: ['./finished-games.component.css']
})
export class FinishedGamesComponent implements OnInit {

   games$: Observable<Game[]>;

  public forDetail:Game;

  constructor(private store$: Store<State>) {
   }

  ngOnInit() {
    this.store$.dispatch(new getGames());
    this.games$= this.store$.select(state => selectors.selectAll(state.finishedGames));

    this.store$.select(state=>state.selectedGame)
    .subscribe((game)=>{
      this.forDetail=game;
  });
  }

  onSelected(game: Game) {
    console.log("Selected", game);
    this.store$.dispatch(new selectGame(game));
  }

  search(event) {
    const value = event.target.value;
    this.forDetail=null;
    this.store$.dispatch(new ClearState());
    this.store$.dispatch(new SearchGames(value));
   
  }
}
