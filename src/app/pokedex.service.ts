import { HttpClient } from '@angular/common/http';
import {Pokedex} from './pokedex/Pokedex';
import { Observable } from 'rxjs';

export class PokeService{
  constructor(private http: HttpClient){}
  getPokemon(ID:number): Observable<Pokedex>{
    return this.http.get<Pokedex>("http://pokeapi.co/api/v2/pokemon/"+ID+"/");
  }
}
