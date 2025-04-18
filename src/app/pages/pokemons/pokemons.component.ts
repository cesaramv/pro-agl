import { SimplePokemon } from '@/pokemons/interfaces';
import { PokemonsService } from '@/pokemons/services/pokemons.service';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { PokemonsListSkeletonComponent } from './ui/pokemons-list-skeleton/pokemons-list-skeleton.component';
import { PokemonListComponent } from '@/pokemons/components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pakemons',
  standalone: true,
  imports: [PokemonListComponent, PokemonsListSkeletonComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonsComponent implements OnInit {

  private pokemonsService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);

  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );

  ngOnInit(): void {
    this.loadPokemons();
    this.meta.updateTag({
      name: 'description',
      content: 'Listados de Pokémons',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Listados de Pokémons' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'List,Pokémons,Agregando,SEO,Angular',
    });
  }

  public loadPokemons(page = 0) {
    const pageToLoad = this.currentPage()! + page;

    this.pokemonsService.loadPage(pageToLoad).pipe(
      tap(() => this.router.navigate([], { queryParams: { page: pageToLoad } })),
      tap(() => this.title.setTitle(`Pokémons SSR - Page ${pageToLoad}`))
    ).subscribe((pokemons) => this.pokemons.set(pokemons))
  }
}
