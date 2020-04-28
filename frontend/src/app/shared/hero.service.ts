import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  baseUrl = 'http://localhost:8080/heroes';    
  // Constractor with HttpClient argument
  constructor(private http: HttpClient) { }
  // Get all heroes
  getHeroes() {
    return this.http.get(this.baseUrl);
  }
  // Get hero by Id
  getHero(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Hero>(url);
  }
  // update hero
  updateHero (hero: Hero) {
    const url = this.baseUrl + "/save-hero";
    console.log(hero);
    return this.http.post(this.baseUrl, hero);
  }
  // delet hero
  deleteHero (hero: Hero){
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
