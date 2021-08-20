import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { NhlModule } from './nhl/nhl.module'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
	{ path: 'welcome', component: WelcomeComponent },
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NhlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
