import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from './nhl.team';
import { NhlService } from './nhl.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-nhl',
  templateUrl: './nhl.component.html',
  styleUrls: ['./nhl.component.css']
})
export class NhlComponent implements OnInit, OnDestroy {
    compHeader: string = "NHL Teams!";
    teamFilter: string = "";
    filteredTeams: Team[] = [];
    teams: Team[] = [];
    errorMessage: string = '';
    sub!: Subscription;

    constructor(private nhlService: NhlService) { }

  ngOnInit(): void {
      this.sub = this.nhlService.getTeams().subscribe({
	  next: teamQuery => {
	      this.teams = teamQuery.teams;
	      this.filteredTeams = this.teams;
	  },
	  error: err => this.errorMessage = err
      });
  }

  ngOnDestroy():void {
      this.sub.unsubscribe();
  }

}
