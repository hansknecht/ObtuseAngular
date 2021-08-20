import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhlService } from './nhl.service';
import { Subscription } from 'rxjs';
import { Team } from './nhl.team';

@Component({
  templateUrl: './nhl.teamdetail.component.html',
  styleUrls: ['./nhl.teamdetail.component.css']
})
export class TeamdetailComponent implements OnInit {
    pageTitle: string = 'Team Detail';
    currentTeam: Team | undefined;
    teams: Team[] = [];
    errorMessage: string = '';
    sub!: Subscription;

  constructor(
      private route: ActivatedRoute,
      private nhlService: NhlService
  ) { }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.pageTitle += `: ${id}`;
      this.sub = this.nhlService.getTeams().subscribe({
	  next: teamQuery => {
	      this.teams = teamQuery.teams;
	      this.currentTeam = this.findTeam(id);
	  },
	  error: err => this.errorMessage = err
      });
  }

  ngOnDestory(): void {
      this.sub.unsubscribe();
  }

  findTeam(teamId: number): Team | undefined {
      return this.teams.find(team => team.id == teamId);
  }

}
