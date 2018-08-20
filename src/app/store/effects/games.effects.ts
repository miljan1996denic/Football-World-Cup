import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import {GET_GAMES,ReciveGames,SEARCH_GAMES,SearchGames,ReceveSearched} from '../actions';
import GamesService from '../../services/utakmica.services';

@Injectable() 
export class GameEffects {

    constructor(
        private actions$: Actions,
        private gamesService: GamesService
    ) {}


    @Effect()
    getBooks$ = this.actions$.ofType(GET_GAMES).pipe(
            switchMap(() => { 
                return this.gamesService.getGames().pipe(
                    map(games => new ReciveGames(games))
                )}
            )
    );  
        
    @Effect()
    searhedGames$=this.actions$.ofType(SEARCH_GAMES).pipe(
        switchMap((action)=>{
            const {uzorak}=action as SearchGames;
            return this.gamesService.getGames().pipe(
                map(games=>{
                    let filtrirano=games.filter(game=>game.home.includes(uzorak) || game.guest.includes(uzorak))
                    return new ReceveSearched(filtrirano);
                })
            )
        })
    )
}                                                             