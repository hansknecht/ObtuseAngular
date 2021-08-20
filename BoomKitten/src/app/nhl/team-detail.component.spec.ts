import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailComponent } from './team-detail.component';

describe('Nhl.TeamdetailComponent', () => {
  let component: TeamdetailComponent;
  let fixture: ComponentFixture<TeamdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
