import { PadreComponent } from '@/viewChildren/padre/padre.component';
import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss'
})
export class ViewsComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Views Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Pranticas',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Views Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Views,viewChildren,Agregando,SEO,Angular',
    });
  }
}
