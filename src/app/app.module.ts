import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }          from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatFormFieldModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { FinishedGamesComponent } from './components/finished-games/finished-games.component';
import { GameComponent } from './components/game/game.component';
import {rootReducer} from './store';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path:'startgame', component: StartGameComponent },
  { path:'finishedgames', component: FinishedGamesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartGameComponent,
    FinishedGamesComponent,
    GameComponent,
    GameDetailComponent
    // MatInputModule,
    // MatFormFieldModule
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule,
     MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
