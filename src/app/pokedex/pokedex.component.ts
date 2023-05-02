import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemon: any;
  pokemonId: number = 1;
  PokeShiny: string = '/shiny';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
      .subscribe(
        (response) => {
          this.pokemon = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  nextPokemon(): void {
    this.pokemonId++;
    this.loadPokemon();
  }

  previousPokemon(): void {
    if (this.pokemonId > 1) {
      this.pokemonId--;
      this.loadPokemon();
    }
  }

  getHp(): number {
    return this.pokemon.stats.find(
      (stat: { stat: { name: string } }) => stat.stat.name === 'hp'
    ).base_stat;
  }

  getType(): string {
    return this.pokemon.types[0].type.name;
  }

  getImg(): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`;
  }
  getShiny(): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${this.pokemon.id}.png`;
  }
}





