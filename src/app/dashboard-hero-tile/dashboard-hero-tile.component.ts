import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard-hero-tile',
  templateUrl: './dashboard-hero-tile.component.html',
  styleUrls: ['./dashboard-hero-tile.component.css']
})
export class DashboardHeroTileComponent implements OnInit {
	private _name = '' 

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get name(): string { return this._name; }

  constructor() { }

  ngOnInit() {
  }

}
