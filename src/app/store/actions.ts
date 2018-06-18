import {Action} from '@ngrx/store';
import { Game } from '../models/game';

export const ADD_GAME = "ADD_GAME";
export const SELECT_GAME = "SELECT_GAME";
export const FETCH='FETCH';
export const HOME_GOAL='HOME_GOAL';

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

export class fetch implements Action {
    type= FETCH;
    constructor() {
    }
    
}

export class incrementHomeGoal implements Action {
    type = HOME_GOAL;
    constructor(public game:Game){
    }
}