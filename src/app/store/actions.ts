import {Action} from '@ngrx/store';
import { Game } from '../models/game';

export const ADD_GAME = "ADD_GAME";
export const SELECT_GAME = "SELECT_GAME";
export const FETCH='FETCH';
export const HOME_GOAL='HOME_GOAL';
export const GET_GAMES='GET_GAMES';
export const RECIVE_GAMES='RECIVE_GAMES';
export const DELETE_GAME='DELETE_GAME';
export const SEARCH_GAMES='SEARCH_GAMES';
export const RECIVE_SEARCHED='RECIVE_SEARCHED';
export const CLEAR_STATE='CLEAR_STATE';

export class getGames implements Action {
    type= GET_GAMES;
    constructor() {
    }
}

export class deleteGame implements Action {
    type= DELETE_GAME;
    id:number;
    constructor(id:number){
        this.id=id;
    }
}

export class ReciveGames implements Action {
    type = RECIVE_GAMES;
    listOfGames: Game[]
    constructor(game: Game[] ) {
        this.listOfGames = [...game]; 
    }
}

export class selectGame implements Action {
    type = SELECT_GAME;
    constructor(public game: Game) {
    }
}

export class addGame implements Action {
    type = ADD_GAME;
    constructor(public game:Game){
    }
}

export class SearchGames implements Action {
    type = SEARCH_GAMES;
    uzorak: string;
    constructor(uzorak: string) {
        this.uzorak = uzorak;
    }
}

export class incrementHomeGoal implements Action {
    type = HOME_GOAL;
    constructor(public game:Game){
    }
}

export class ReceveSearched implements Action {
    type= RECIVE_SEARCHED;
    constructor(public games:Game[]){}
}
export class ClearState implements Action{
    type=CLEAR_STATE;
    constructor(){}
}