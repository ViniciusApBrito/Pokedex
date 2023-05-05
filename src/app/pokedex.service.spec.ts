import { TestBed } from '@angular/core/testing';

import { PokeService } from './pokedex.service';

describe('PokedexService', () => {
  let service: PokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
