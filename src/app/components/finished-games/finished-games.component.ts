import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game';
import {Store} from '@ngrx/store';
import {State } from '../../store';
import {selectGame,fetch} from '../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finished-games',
  templateUrl: './finished-games.component.html',
  styleUrls: ['./finished-games.component.css']
})
export class FinishedGamesComponent implements OnInit {

  //public finishedGames$: Observable<Game[]>;
  public games:Game[];
  public forDetail:Game;

  constructor(private store$: Store<State>) {
    // console.log("uso u finsi const",this.finishedGames$);
    // console.log("provera stora u finish",store$)
   }

  ngOnInit() {
    this.store$.dispatch(new fetch());


    this.store$.select(state=>state.finishedGames)
    .subscribe((games)=>this.games=games);

    this.store$.select(state=>state.selectedGame)
    .subscribe((game)=>{
      console.log("proba subscribea",game)
      this.forDetail=game;
      console.log("KONACNO",this.forDetail)
  });
    console.log("Provera detalja",this.forDetail)
    // console.log("uso u on init finished",this.finishedGames$)
  }

  onSelected(game: Game) {
    console.log("Selected", game);
    this.store$.dispatch(new selectGame(game));
  }

}
