import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from './nhl.team';
import { NhlService } from './nhl.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './nhl.component.html',
  styleUrls: ['./nhl.component.css']
})
export class NhlComponent implements OnInit, OnDestroy {
    compHeader: string = "NHL Teams!";
    filteredTeams: Team[] = [];
    teams: Team[] = [];
    errorMessage: string = '';
    sub!: Subscription;

    private _teamFilter: string = '';
    get teamFilter(): string {
	return this._teamFilter;
    }
    set teamFilter(value: string) {
	this._teamFilter = value;
	this.filteredTeams = this.performFilter(value);
    }

    constructor(private nhlService: NhlService) { }

  ngOnInit(): void {
      this.teamFilter = '';
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

  performFilter(filterBy: string): Team[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.teams.filter((team: Team) => team.name.toLocaleLowerCase().includes(filterBy));
  }

}
