import { Component, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  inputs: ['nRecTitleId', 'sSrchTitleText'],
  outputs: ['nRecId']
})
export class ProductListComponent implements OnInit, OnChanges {
  heroes: Object;
  hero: Hero;
  bRefresh: boolean = true;
  nRecId = new EventEmitter <string>();
  // Costractor with HeroService argument
  constructor(private heroService: HeroService) { }
  // Initialize list with all heroes
  ngOnInit() {
    this.heroService.getHeroes().subscribe( data => this.heroes = data );
  }
  // Set all change in list of heroes
  ngOnChanges(): void{
    if(this.bRefresh){
      this.heroService.getHeroes().subscribe(data => this.heroes = data);
    }
  }
  // Set selected record on list
  setRecId (myId: string){
    this.nRecId.emit(myId);
  }
  // Delete record of selected
  delete(hero: Hero): void {
    if(confirm("Are you sure to delete " + hero.name)) {
      this.heroService.deleteHero(hero).subscribe(data => this.ngOnChanges());
    }
  }  
}