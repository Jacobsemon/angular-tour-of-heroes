import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroTileComponent } from './dashboard-hero-tile.component';

describe('DashboardHeroTileComponent', () => {
  let component: DashboardHeroTileComponent;
  let fixture: ComponentFixture<DashboardHeroTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
