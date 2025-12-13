import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QrCodeModule } from 'ng-qrcode';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [ReactiveFormsModule, QrCodeModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss'
})
export class QrComponent {
form: FormGroup;
  textToQR = FormControl
  qrCode!: string;

  constructor(private fb: FormBuilder) {
      this.form = fb.group({
        textToQR: fb.control(null, Validators.required)
      });
    }
  generateQR(){
    console.log('val input => ', this.form.controls['textToQR'].value);
    this.qrCode = this.form.controls['textToQR'].value;
  }
}
