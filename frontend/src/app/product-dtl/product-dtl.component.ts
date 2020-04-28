import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-product-dtl',
  templateUrl: './product-dtl.component.html',
  styleUrls: ['./product-dtl.component.css'],
  inputs: ['nDtlRecId', 'nDtlTitleId'],
  outputs: ['nDtlRecOutId']
})
export class ProductDtlComponent implements OnChanges {
  @Input() hero: Hero;
  nDtlRecId = 0;
  nDtlTitleId = '10001';
  nDtlRecOutId = new EventEmitter <string>();
  @Output() onChanged = new EventEmitter<string>();
  heroId: number;

  constructor(private heroService: HeroService) {
    this.hero = new Hero();
  }

  // Set event for input and output change 
  ngOnChanges(): void{
    this.getHeroByID();
    this.heroId = this.hero.id;
  }
  // Save in heroService for Create state and update state, then set onChange for update list 
  save(): void {
    this.heroService.updateHero(this.hero).subscribe((data) => {
      alert("hero " + ((this.hero.id == 0) ? "created" : "edited") + " successfully.");
      console.log(data);
    }, error => console.log(error));
    this.nDtlRecOutId.emit("0");
    this.onChanged.emit("true");
  }
  // Get hero from heroService or set new hero for create it
  getHeroByID(): void {
    if(this.nDtlRecId < 0){
      this.hero = new Hero();
      this.hero.id = 0;
      this.hero.name = "";
      this.hero.age = "";
      this.hero.cardId = "";
      this.hero.description = "";
      this.hero.titleId = this.nDtlTitleId;
      return ;
    }
    if(this.nDtlRecId > 0){
      this.heroService.getHero(this.nDtlRecId)
        .subscribe(hero => {this.hero = hero; return hero;});
      }
    return ;
  }
}
