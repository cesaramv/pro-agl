import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { ComponentRef } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let compiled: HTMLElement;
  const listPoke = [{ name: 'pok1', id: 1 }, { name: 'pok2', id: 2 }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render "No hay pokémons"', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();
    expect(compiled.querySelector('h2')?.textContent).toContain('No hay pokémons');
  });

  it('should render pokemon list with 2 pokemon card', () => {
    fixture.componentRef.setInput('pokemons', listPoke);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('pokemon-card').length).toBe(listPoke.length);
  });
});
