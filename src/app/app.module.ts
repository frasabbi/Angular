import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaxPlayersComponent } from './max-players/max-players.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MasterPageComponent } from './master-page/master-page.component';

@NgModule({
   declarations: [
      AppComponent,
      MaxPlayersComponent,
      WelcomeComponent,
      MasterPageComponent,
     
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      RouterModule.forRoot([
         { path: 'welcome', component: WelcomeComponent },
         { path: 'courts', component: AppComponent },
         { path: '', redirectTo: 'welcome', pathMatch: 'full' },
         { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
       ]),
   ],
   providers: [],
   bootstrap: [MasterPageComponent]
})
export class AppModule { }
