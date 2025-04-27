import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { ComponentRef } from '@angular/core';

describe('IconComponent', () => {
  let component: IconComponent;
    let componentRef: ComponentRef<IconComponent>;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('icon', 'myIcon');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
