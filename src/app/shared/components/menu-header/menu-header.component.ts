import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menu-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuHeaderComponent {
  public onClick = output<string>();

  handleClick(){debugger
    this.onClick.emit('Desde el button del menú');
  }
}
