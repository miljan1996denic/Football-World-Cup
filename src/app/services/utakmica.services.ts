import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Game } from '../models/game';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class GamesService {

  constructor(private http: HttpClient ) {
  
  }

  public getGames(): Observable<Game[]> {
    
    return this.http.get<Game[]>('http://localhost:3000/games');
  }
  
  public addGame(Game: Game) {
    this.http.post('http://localhost:3000/games', Game)
              .subscribe(response => console.log(response)); 
          
  }

  public deleteGame(id: number) {
    this.http.delete(`http://localhost:3000/games/${id}`) 
              .subscribe(response => console.log(response));
  }

  public updateGame(game: Game) {
    this.http.put(`http://localhost:3000/games/${game.id}`, game)
            .subscribe(response => console.log(response)); 
}
}
