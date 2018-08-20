import { Action } from "@ngrx/store";
import {Game} from '../../models/game';
import {ADD_GAME, addGame,RECIVE_GAMES,ReciveGames,DELETE_GAME,deleteGame,ReceveSearched, CLEAR_STATE,RECIVE_SEARCHED} from '../actions';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export interface GameState extends EntityState<Game>{
    ids: number[],
    entities: { [id: number] : Game}
}
export const gameAdapter: EntityAdapter<Game>= createEntityAdapter<Game>();
const initalState: GameState = {
    ids: [],
    entities: { }
}
    export default function (state: GameState = initalState, action: Action) {
        switch(action.type) {
            case ADD_GAME:{
                const {game} = action as addGame;
                return gameAdapter.addOne(game,state);
            }
            case RECIVE_GAMES: {
                const { listOfGames } = action as ReciveGames;
                return gameAdapter.addMany(listOfGames,state);
            }
            case DELETE_GAME:{
                const {id}=action as deleteGame;
                return gameAdapter.removeOne(id,state);
            }
            case CLEAR_STATE:{
                return gameAdapter.removeAll(state);
            }
            case RECIVE_SEARCHED:{
                const {games}=action as ReceveSearched;
                return gameAdapter.addMany(games,state);
            }
            default: 
                return state;
        }
    }
    
    export const selectors= gameAdapter.getSelectors();