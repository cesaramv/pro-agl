import { PadreComponent } from '@/viewChildren/padre/padre.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss'
})
export class ViewsComponent {

}
