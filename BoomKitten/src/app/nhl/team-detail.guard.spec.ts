import { TestBed } from '@angular/core/testing';

import { TeamDetailGuard } from './team-detail.guard';

describe('TeamDetailGuard', () => {
  let guard: TeamDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeamDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
