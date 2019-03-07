import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaxPlayersComponent } from './max-players/max-players.component';
import { MasterpageComponent } from './masterpage/masterpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      MaxPlayersComponent,
      MasterpageComponent,
      WelcomepageComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         {path: 'home',component : WelcomepageComponent},
         {path: 'courts',component : AppComponent},
         {path: '', redirectTo: 'home', pathMatch: 'full' },
         {path: '**', redirectTo: 'home', pathMatch: 'full' }
      ]),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      MasterpageComponent
   ]
})
export class AppModule { }
