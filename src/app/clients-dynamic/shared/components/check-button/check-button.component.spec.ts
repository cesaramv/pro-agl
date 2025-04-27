import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckButtonComponent } from './check-button.component';
import { ComponentRef } from '@angular/core';

describe('CheckButtonComponent', () => {
  let component: CheckButtonComponent;
  let componentRef: ComponentRef<CheckButtonComponent>;
  let fixture: ComponentFixture<CheckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckButtonComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('rolSelected', {id: 1, rol: 'Gerente', icon: 'profile-svgrepo-com'});
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
