import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes-hero-tile',
  templateUrl: './heroes-hero-tile.component.html',
  styleUrls: ['./heroes-hero-tile.component.css']
})
export class HeroesHeroTileComponent implements OnInit {
	@Input() hero: Hero;
	@Input() ids: number[] = [];
	@Output() deleteOnChild = new EventEmitter<Hero>()
	@Output() addLog = new EventEmitter<number>()
	isSelected: boolean = false;
  constructor() { }

  delete(hero: Hero): void {
    this.deleteOnChild.emit(hero);
  }
  selectValue(id: number): void {
  	this.addLog.emit(id)
  	this.isSelected = !this.isSelected
  }
  ngOnInit() {
  }

}
