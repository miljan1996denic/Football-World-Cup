import gamesReducer from './reducers/games.reducer';
import {Game} from '../models/game';
import { ActionReducerMap } from '@ngrx/store';
import selectedGame from './reducers/selected-game.reducer';

export interface State {
    finishedGames: Game[],
    selectedGame:Game
}

export const rootReducer:ActionReducerMap<State>={
    finishedGames: gamesReducer,
    selectedGame: selectedGame
}