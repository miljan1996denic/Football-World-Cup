import { Action } from "@ngrx/store";
import { Game } from "../../models/game";
import { SELECT_GAME, selectGame, HOME_GOAL, incrementHomeGoal} from "../actions";

export default function (state: Game = null, action: Action) {
    switch(action.type) {
        case SELECT_GAME: {
            return (action as selectGame).game;
        }
        case HOME_GOAL:{
            return (action as incrementHomeGoal).game;
        }
        default:
            return state;
    }
}