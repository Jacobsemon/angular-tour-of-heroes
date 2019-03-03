import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHeroTileComponent } from './heroes-hero-tile.component';

describe('HeroesHeroTileComponent', () => {
  let component: HeroesHeroTileComponent;
  let fixture: ComponentFixture<HeroesHeroTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesHeroTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesHeroTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
