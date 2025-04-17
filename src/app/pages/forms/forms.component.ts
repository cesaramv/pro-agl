import { ClientsComponent } from '@/clients-dynamic/clients/clients.component';
import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ClientsComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Forms Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Estos son mis Forms',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Forms Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Forms,Dynamic,Agregando,SEO,Angular',
    });
  }
}
