import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemons-list-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './pokemons-list-skeleton.component.html',
  styleUrl: './pokemons-list-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsListSkeletonComponent {

}
