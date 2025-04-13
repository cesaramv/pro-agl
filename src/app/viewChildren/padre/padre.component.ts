import { NgFor } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [NgFor, HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss'
})
export class PadreComponent {
  arr = [1, 2, 3];

  @ViewChildren(HijoComponent) hijos!: QueryList<HijoComponent>;

  ngAfterViewInit(): void {
    this.hijos.changes.subscribe((componentes: QueryList<HijoComponent>) => {
      componentes.forEach(componente => {

      })
    });
  }

  agregar() {
    this.arr.push(this.arr.length + 1);
  }

  remover() {
    this.arr.pop();
  }

  voltearColor(index: number) {
    if (!index) { return; }
    const componente = this.hijos.toArray()[index];
    componente.voltearColor();
  }

  voltearColores() {
    this.hijos.forEach((componente: HijoComponent) => {
      componente.voltearColor();
    });
  }

}
