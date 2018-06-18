import { Component, OnInit, Input } from '@angular/core';
import {Game} from '../../models/game';
import {Store} from '@ngrx/store';
import {State } from '../../store';
import {incrementHomeGoal} from '../../store/actions';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() public forDetail: Game;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
  }

  homeGoal(){
      this.forDetail.goalHome++;
      this.store$.dispatch(new incrementHomeGoal(this.forDetail));
  }
  guestGoal(){
    this.forDetail.goalGuest++;
    this.store$.dispatch(new incrementHomeGoal(this.forDetail));
  }
}
