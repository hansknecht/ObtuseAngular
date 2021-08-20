import { NgModule } from '@angular/core';
import { TeamdetailComponent } from './team-detail.component';
import { TeamsComponent } from './teams';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TeamDetailGuard } from './team-detail.guard';


@NgModule({
  declarations: [
    TeamsComponent,
    TeamdetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'NhlTeams', component: TeamsComponent },
      { 
        path: 'NhlTeam/:id', 
        canActivate: [TeamDetailGuard],
        component: TeamdetailComponent 
      }
    ]),
    SharedModule
  ]
})
export class NhlModule { }
