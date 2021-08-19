import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NhlComponent } from './nhl/nhl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamdetailComponent } from './nhl/nhl.teamdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NhlComponent,
    WelcomeComponent,
    TeamdetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
	{ path: 'NhlTeams', component: NhlComponent },
	{ path: 'NhlTeam/:id', component: TeamdetailComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
