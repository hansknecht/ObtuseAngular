import { NgModule } from '@angular/core';
import { TeamdetailComponent } from './team-detail.component';
import { TeamsComponent } from './teams';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TeamsComponent,
    TeamdetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'NhlTeams', component: TeamsComponent },
      { path: 'NhlTeam/:id', component: TeamdetailComponent }
    ]),
    SharedModule
  ]
})
export class NhlModule { }
