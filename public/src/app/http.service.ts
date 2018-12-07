import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private _http: HttpClient){
  this.getPokemon();
}
getPokemon(){
  let bulbasuar = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasuar.subscribe(data => {
    console.log(`This is ${data.name}!`);
    console.log(`His favorite moves are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}!`);
    let chlorophyll = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    chlorophyll.subscribe(data => {
      console.log(`There is ${data.pokemon.length} other pokemon with chlorophyll!`);
      for(var i = 0; i < data.pokemon.length; i++){
        console.log(`${data.pokemon[i].pokemon.name} has chlorophyll`)
      }
    })
  })

}
}
