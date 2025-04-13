import { Component, inject, input, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-button',
  standalone: true,
  imports: [IconComponent, NgFor, ReactiveFormsModule],
  templateUrl: './check-button.component.html',
  styleUrl: './check-button.component.scss'
})
export class CheckButtonComponent {

  //@Input() roles!: Array<any>;
  rolSelected = input<any>();

  rolesContol = new FormControl('', Validators.required);
  //private fb = inject(FormBuilder);

  /* formRoles = this.fb.group({
    rolesControls: this.fb.array([], Validators.required)
  });

  get rolesControls(): FormArray {
    return this.formRoles.get('rolesControls') as FormArray;
  }

  constructor() {
    this.roles.map(() => {
      this.rolesControls.push({ rol: new FormControl('') })
    });
  } */

  //rolesControl = Contro;
  roles = [
    {id: 1, rol: 'Gerente', icon: 'profile-svgrepo-com'},
    {id: 2, rol: 'Vendedor', icon: 'shopping-svgrepo-com'},
    {id: 3, rol: 'Transportador', icon: 'transportation-svgrepo-com'},
    {id: 4, rol: 'Diseñador', icon: 'pen-svgrepo-com'}
  ]

}
