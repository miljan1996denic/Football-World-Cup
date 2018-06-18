import { Action } from "@ngrx/store";
import {Game} from '../../models/game';
import {ADD_GAME, addGame, FETCH, fetch} from '../actions';
import {fetchData,postData} from '../../services/utakmica.services';


    export default function (state: Game[] = null, action: Action) {
        switch(action.type) {
            case ADD_GAME:{
                const {game} = action as addGame;
                postData(game)
                return [...state,game];
            }
            default: 
            let vin=[];
            let niz=fetchData().then(game => game.forEach(element => {
              vin.push(new Game(element.id,element.finised,element.home,element.guest,element.goalHome,element.goalGuest,element.minut))
            }))
                state=vin;
                return state;
        }
    }