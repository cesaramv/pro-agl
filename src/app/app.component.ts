import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import MenuHeaderComponent from './shared/components/menu-header/menu-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'pro-agl';
  handleClick(event: any) {debugger
    console.log(event)
  }
}
