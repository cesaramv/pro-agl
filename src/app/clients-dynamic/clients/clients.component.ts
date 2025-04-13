import { Component, OnInit } from '@angular/core';
import { CheckButtonComponent } from '../shared/components/check-button/check-button.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientEntity } from '../shared/models/client.entity';
import { CommonModule, NgFor } from '@angular/common';
import { DOCUMENT_TYPE } from '../shared/models/constants';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CheckButtonComponent, ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  form: FormGroup;
  documentTypeList = [
    { id: 'CC', text: 'Cédula de Ciudadanía' },
    { id: 'NT', text: 'NIT' }
  ];

  rolesList = [
    { id: 1, rol: 'Gerente', icon: 'profile-svgrepo-com' },
    { id: 2, rol: 'Contador', icon: 'shopping-svgrepo-com' },
    { id: 3, rol: 'Transportador', icon: 'transportation-svgrepo-com' },
    { id: 4, rol: 'Diseñador', icon: 'pen-svgrepo-com' },
    /* { id: 5, rol: 'Recursos Humanos' },
    { id: 6, rol: 'Sistemas' },
    { id: 7, rol: 'Seguridad' } */
  ]

  dataClientList = [
    {
      documentNumber: "11123",
      documentType: "CC",
      fullName: "Cesar",
      roles: undefined
    },
    {
      documentNumber: "22222",
      documentType: "NT",
      fullName: "Lorena",
      roles: undefined
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      clients: fb.array([])
    })
  }

  ngOnInit(): void {
    const clientsEntity = this.dataClientList.map((client) => new ClientEntity(
      client.fullName,
      client.documentType as DOCUMENT_TYPE,
      client.documentNumber,
      []
    ));
    clientsEntity.forEach(clientData => {
      this.clients.push(this.addClient(clientData));
    });
  }

  get clients(): FormArray {
    return this.form.get('clients') as FormArray;
  }

  addClient(clientData?: ClientEntity): FormGroup {
    return this.fb.group({
      fullName: [clientData ? clientData.getFullName() : null, Validators.required],
      documentType: [clientData ? this.getDocumentType(clientData.getDocumentType()) : null, Validators.required],
      documentNumber: [clientData ? clientData.getDocumentNumber() : null, Validators.required],
      roles: [clientData ? this.getRoles(clientData.getRoles()) : []]
    });
  }

  private getDocumentType(idDocumentType: string) {
    return this.documentTypeList.find(dt => dt.id === idDocumentType);
  }

  private getRoles(idsRoles: number[]) {
    return idsRoles.filter(id => this.rolesList.find(rol => rol.id === id));
  }

  handleAddClient() {
    this.clients.push(this.addClient());
  }

  handleDeleteClient(index: number) {
    this.clients.removeAt(index);
  }

  handleSaveClients() {
    if (this.form.valid) {
      const dataClients = this.clients.value.map((client: any) => {
        return {
          ...client,
          documentType: client.documentType,
          roles: client.roles.id
        }
      })
      console.log('dataClients => ', dataClients);
    }
  }

  handleSelected(val1: any, val2: any) {
    if(!val1 || !val2) return false; 
    return val1.id === val2.id
  }
}
