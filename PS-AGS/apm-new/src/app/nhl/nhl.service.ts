import { Injectable } from '@angular/core';
import { Team } from './nhl.team';
import { TeamQuery } from './nhl.teamquery';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NhlService {
    private teamsUrl = 'https://statsapi.web.nhl.com/api/v1/teams';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<TeamQuery> {
      return this.http.get<TeamQuery>(this.teamsUrl).pipe(tap(data => console.log('All: ', JSON.stringify(data))), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
	  errorMessage = `An error occured: $(err.error.message)`;
      } else {
	  errorMessage = `Server returned code: $(err.status), error message is: $(err.message)`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
  }
}
