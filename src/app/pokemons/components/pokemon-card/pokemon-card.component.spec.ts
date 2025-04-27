import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter } from '@angular/router';
import { ComponentRef, input } from '@angular/core';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let componentRef: ComponentRef<PokemonCardComponent>;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('pokemon', {name: 'pok1', id: 1});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
